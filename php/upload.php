<?php
session_start();

require_once 'db_connect.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["profileUpload"])) {
    // Assuming you have user_id stored in a session variable named 'user_id'
    $user_id = $_SESSION['user_id']; // Adjust this according to your session handling
    
    $imageData = file_get_contents($_FILES["profileUpload"]["tmp_name"]);

    // Prepare and execute SQL statement
    $stmt = $conn->prepare("INSERT INTO profiles (user_id, profile_photo) VALUES (?, ?)");
    $stmt->bind_param("ib", $user_id, $imageData);
    
    if ($stmt->execute()) {
        echo "Image uploaded successfully";
    } else {
        echo "Error uploading image: " . $stmt->error;
    }
    
    // Close connections
    $stmt->close();
} else {
    echo "No image uploaded";
}

$conn->close();
?>
