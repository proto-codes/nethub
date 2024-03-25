<?php
// Include database connection file
require_once "db_connect.php";

// Start a session
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $verifyuser = $_POST['verifyuser'];
    $password = $_POST['password'];

    // Maximum allowed signin attempts
    $maxAttempts = 10;

    // Check if inputs are empty
    if (empty($verifyuser) || empty($password)) {
        echo "Please fill in all fields.";
    } else {
        // Use prepared statement to check if the user exists
        $sql = "SELECT * FROM users WHERE username = ? OR email = ? OR phone_number = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $verifyuser, $verifyuser, $verifyuser);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // User exists, check the password
            $row = $result->fetch_assoc();

            // Check if the account is locked
            if ($row['account_locked'] == 1) {
                echo "Account locked! Please contact support.";
            } else {
                // Check password using password_verify
                if (password_verify($password, $row['password'])) {
                    // Form validation successful
                    echo "Validation successful";

                    // regenerate session ID
                    session_regenerate_id(true);

                    // Update last signin timestamp
                    $updateLastsigninSQL = "UPDATE users SET last_signin = CURRENT_TIMESTAMP WHERE id = ?";
                    $updateLastsigninStmt = $conn->prepare($updateLastsigninSQL);
                    $updateLastsigninStmt->bind_param("i", $row['id']);
                    $updateLastsigninStmt->execute();
                    $updateLastsigninStmt->close();

                    // Clear failed signin attempts
                    $clearFailedAttemptsSQL = "UPDATE users SET failed_signin_attempts = 0 WHERE id = ?";
                    $clearFailedAttemptsStmt = $conn->prepare($clearFailedAttemptsSQL);
                    $clearFailedAttemptsStmt->bind_param("i", $row['id']);
                    $clearFailedAttemptsStmt->execute();
                    $clearFailedAttemptsStmt->close();

                    // Set session variables
                    $_SESSION['user_id'] = $row['id'];
                    $_SESSION['username'] = $row['username'];
                    $_SESSION['firstname'] = $row['firstname'];
                    $_SESSION['lastname'] = $row['lastname'];
                    $_SESSION['email'] = $row['email'];
                    $_SESSION['phone_number'] = $row['phone_number'];
                    $_SESSION['birthday'] = $row['birthday'];
                    $_SESSION['followers'] = $row['followers'];
                    $_SESSION['following'] = $row['following'];
                    $_SESSION['last_signin'] = $row['last_signin'];
                    $_SESSION['created_at'] = $row['created_at'];
                } else {
                    // Incorrect password
                    $failedAttempts = $row['failed_signin_attempts'] + 1;
                    $remainingAttempts = $maxAttempts - $failedAttempts;

                    if ($failedAttempts <= 5) {
                        echo "Incorrect password!";
                    } else {
                        echo "Incorrect password! You have $remainingAttempts attempts remaining.";
                    }

                    // Track failed signin attempts
                    $updateFailedAttemptsSQL = "UPDATE users SET failed_signin_attempts = ? WHERE id = ?";
                    $updateFailedAttemptsStmt = $conn->prepare($updateFailedAttemptsSQL);
                    $updateFailedAttemptsStmt->bind_param("ii", $failedAttempts, $row['id']);
                    $updateFailedAttemptsStmt->execute();
                    $updateFailedAttemptsStmt->close();

                    // Implement account lockout if necessary
                    if ($failedAttempts >= $maxAttempts) {
                        $lockAccountSQL = "UPDATE users SET account_locked = 1 WHERE id = ?";
                        $lockAccountStmt = $conn->prepare($lockAccountSQL);
                        $lockAccountStmt->bind_param("i", $row['id']);
                        $lockAccountStmt->execute();
                        $lockAccountStmt->close();
                        echo "Account locked! Please contact support.";
                    }
                }
            }
        } else {
            // User does not exist
            echo "User does not exist!";
        }

        // Close the prepared statement
        $stmt->close();
    }
}

// Close the database connection
$conn->close();
?>