<?php
session_start();

if (isset($_SESSION['user_id'])) {
    // User is authenticated
    echo 'Authenticated';
} else {
    // User is not authenticated
    echo 'Not authenticated!';
}
?>