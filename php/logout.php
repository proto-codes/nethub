<?php
session_start();

// Check if the logout button is clicked
if(isset($_POST['logout'])) {
    // Unset all session variables
    $_SESSION = array();

    // Destroy the session
    session_destroy();

    // Redirect the user to the signin page or any other page
    header("location: user_auth.html");
    exit();
}
?>