<?php
session_start();

require_once "db_connect.php";

// Check if user is logged in
if(isset($_SESSION["user_id"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if save profile btn save_profile
    if(isset($_POST['save_profile'])) {
        // Sanitize user inputs for users table
        $username = $_POST['username'];
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $phone_number = $_POST['phone_number'];
        $birthday = $_POST['birthday'];

        // check if input value is the same with db value
        // $mySQLCheck = "SELECT * FROM users WHERE username=?, firstname=?, lastname=?, email=?, phone_number=?, birthday=?";        
        
        // Validate inputs
        if(empty($username) || empty($firstname) || empty($lastname) || empty($email) || empty($phone_number) || empty($birthday)) {
            echo "Please fill in all fields.users";
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email format.";
        } elseif (!preg_match('/^\+\d{1,3}\s?\d{1,14}$/', $phone_number)) {
            echo "Invalid phone number format. Please enter a valid phone number with country code.";
        } elseif (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $birthday)) {
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
                // Define SQL statement for update
                $update_user_table = "UPDATE users SET username=?, firstname=?, lastname=?, email=?, phone_number=?, birthday=? WHERE id=?";

                // Prepare the SQL statement
                $stmt_update_user = $conn->prepare($update_user_table);

                // Bind parameters
                $stmt_update_user->bind_param("ssssssi", $username, $firstname, $lastname, $email, $phone_number, $birthday, $_SESSION["user_id"]);

                // Execute the query
                if ($stmt_update_user->execute()) {
                    echo "Record updated in users table successfully!";
                } else {
                    echo "Error updating record in users table: " . $conn->error;
                }

                // Close the statement
                $stmt_update_user->close();
            }
        }

        // Check if the user's profile exists in the profiles table
        $profile_query = "SELECT * FROM profiles WHERE user_id = ?";
        $stmt_profile = $conn->prepare($profile_query);
        $stmt_profile->bind_param("i", $_SESSION["user_id"]);
        $stmt_profile->execute();
        $result_profile = $stmt_profile->get_result();
        $profile_exists = $result_profile->num_rows > 0;
        $stmt_profile->close();

        // Sanitize user inputs for profiles table
        $nickname = $_POST['nickname'];
        $bio = $_POST['bio'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $country = $_POST['country'];
        $profession = $_POST['profession'];
        $relationship = $_POST['relationship'];
        $website = $_POST['website'];

        // If profile does not exist, perform an insert operation
        if(!$profile_exists) {
            // Define SQL statement for insert
            $insert_profile_table = "INSERT INTO profiles (user_id, nickname, bio, city, state, country, profession, relationship, website) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

            // Prepare the SQL statement
            $stmt_insert_profile = $conn->prepare($insert_profile_table);

            // Bind parameters
            $stmt_insert_profile->bind_param("issssssss", $_SESSION["user_id"], $nickname, $bio, $city, $state, $country, $profession, $relationship, $website);

            if(empty($nickname) || empty($bio) || empty($city) || empty($state) || empty($country) || empty($profession) || empty($relationship) || empty($website)) {
                echo "Please fill in all fields.Profiles";
            } else {
                // Execute the query
                if ($stmt_insert_profile->execute()) {
                    echo "New record inserted in profiles table successfully!";
                } else {
                    echo "Error inserting record in profiles table: " . $conn->error;
                }
                
                // Close the statement
                $stmt_insert_profile->close();
            }
        } else {
            // If profile exists, perform an update operation
            // Define SQL statement for update
            $update_profile_table = "UPDATE profiles SET nickname=?, bio=?, city=?, state=?, country=?, profession=?, relationship=?, website=? WHERE user_id=?";

            // Prepare the SQL statement
            $stmt_update_profile = $conn->prepare($update_profile_table);

            // Bind parameters
            $stmt_update_profile->bind_param("ssssssssi", $nickname, $bio, $city, $state, $country, $profession, $relationship, $website, $_SESSION["user_id"]);

            if(empty($nickname) || empty($bio) || empty($city) || empty($state) || empty($country) || empty($profession) || empty($relationship) || empty($website)) {
                echo "Please fill in all fields.Profiles";
            } else {
                // Execute the query
                if ($stmt_update_profile->execute()) {
                    echo "Profile record updated successfully!";
                } else {
                    echo "Error updating profile record: " . $conn->error;
                }
    
                // Close the statement
                $stmt_update_profile->close();
            }
        }
    }
}
?>