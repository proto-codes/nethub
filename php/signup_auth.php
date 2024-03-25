<?php
// Include database connection file
require_once "db_connect.php";

// Start a session
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $birthday = $_POST['birthday'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Check if inputs are empty
    if (empty($username) || empty($firstname) || empty($lastname) || empty($email) || empty($phone_number) || empty($birthday) || empty($password)) {
        echo "All fields are required!";
    } else {
        // Email Validation
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email format";
        } else {
            // Phone Number Validation
            if (!preg_match('/^\+\d{1,3}\s?\d{1,14}$/', $phone_number)) {
                echo "Invalid phone number format. Please enter a valid phone number with country code.";
            } else {
                // Birthday Format Validation
                if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $birthday)) {
                    echo "Invalid birthday format. Please use YYYY-MM-DD format.";
                } else {
                    // Check if the username, email, or phone_number already exists
                    $checkExistingUserSQL = "SELECT 
                    CASE 
                        WHEN username = ? THEN 'Username'
                        WHEN email = ? THEN 'Email'
                        WHEN phone_number = ? THEN 'Phone number'
                        ELSE NULL 
                    END AS conflict_field
                    FROM users WHERE username = ? OR email = ? OR phone_number = ?";
                    $checkExistingUserStmt = $conn->prepare($checkExistingUserSQL);
                    $checkExistingUserStmt->bind_param("ssssss", $username, $email, $phone_number, $username, $email, $phone_number);
                    $checkExistingUserStmt->execute();
                    $result = $checkExistingUserStmt->get_result();

                    if ($result->num_rows > 0) {
                    $row = $result->fetch_assoc();
                    echo $row['conflict_field'] . " already exists!";
                    } else {
                        // Password validation
                        if ($password !== $confirm_password) {
                            echo "Passwords do not match";
                        } else {
                            // Password Strength Check
                            if (strlen($password) < 6 || !preg_match('/[A-Z]/', $password) || !preg_match('/[a-z]/', $password) || !preg_match('/[0-9]/', $password) || !preg_match('/[!@#$%^&*]/', $password)) {
                                echo "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
                            } else {
                                // Username Validation
                                if (!preg_match('/^[a-zA-Z0-9]{4,20}$/', $username)) {
                                    echo "Username must be alphanumeric and between 4 to 20 characters.";
                                } else {
                                    // Name Validation
                                    if (!preg_match('/^[a-zA-Z\s]{2,50}$/', $firstname) || !preg_match('/^[a-zA-Z\s]{2,50}$/', $lastname)) {
                                        echo "First and last names must contain only letters and spaces, and be between 2 to 50 characters each.";
                                    } else {
                                        // Birthday Range Validation
                                        $currentDate = date('Y-m-d');
                                        if ($birthday >= $currentDate) {
                                            echo "Invalid birthday. Please enter a date in the past.";
                                        } elseif (strtotime($birthday) < strtotime("-100 years")) {
                                            echo "Invalid birthday. Please enter a more recent date.";
                                        } else {
                                            // Terms of Service Agreement Validation
                                            if (!isset($_POST['checkbox']) || $_POST['checkbox'] !== 'on') {
                                                echo "You must agree to the terms of service.";
                                            } else {
                                                // Hash the password
                                                $hashed_password = password_hash($password, PASSWORD_DEFAULT);

                                                // Insert user data into the database
                                                $insertUserSQL = "INSERT INTO users (username, firstname, lastname, email, phone_number, birthday, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
                                                $insertUserStmt = $conn->prepare($insertUserSQL);
                                                $insertUserStmt->bind_param("sssssss", $username, $firstname, $lastname, $email, $phone_number, $birthday, $hashed_password);

                                                if ($insertUserStmt->execute()) {
                                                    // Registration successful
                                                    echo "Registration successful!";
                                                } else {
                                                    echo "Error during registration. Please try again.";
                                                }

                                                $insertUserStmt->close();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    $checkExistingUserStmt->close();
                }
            }
        }
    }
}

// Close the database connection
$conn->close();
?>