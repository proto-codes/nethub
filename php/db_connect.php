<?php
$server = "localhost";
$username = "root";
$password = "";

$conn = new mysqli($server, $username, $password);

if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
}

// Create database
$sql_create_db = "CREATE DATABASE IF NOT EXISTS nethub";

if ($conn->query($sql_create_db) !== TRUE) {
    die("Error creating database: " . $conn->error);
}

// Select the database
if (!$conn->select_db("nethub")) {
    die("Database selection failed: " . $conn->error);
}

$sql_users = "CREATE TABLE IF NOT EXISTS users (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  birthday DATE NOT NULL,
  password VARCHAR(255) NOT NULL,
  account_locked TINYINT(1) NOT NULL,
  failed_signin_attempts INT(11) NOT NULL,
  followers TEXT NOT NULL,
  following TEXT NOT NULL,
  last_signin TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX (username),
  INDEX (email)
)";

$sql_profiles = "CREATE TABLE IF NOT EXISTS profiles (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT(11) NOT NULL,
  cover_photo VARCHAR(50) COLLATE utf8mb4_general_ci NOT NULL,
  profile_photo VARCHAR(50) COLLATE utf8mb4_general_ci NOT NULL,
  nickname VARCHAR(20) COLLATE utf8mb4_general_ci NOT NULL,
  bio TEXT COLLATE utf8mb4_general_ci NOT NULL,
  city VARCHAR(50) COLLATE utf8mb4_general_ci NOT NULL,
  state VARCHAR(50) COLLATE utf8mb4_general_ci NOT NULL,
  country VARCHAR(50) COLLATE utf8mb4_general_ci NOT NULL,
  profession VARCHAR(20) COLLATE utf8mb4_general_ci NOT NULL,
  relationship VARCHAR(20) COLLATE utf8mb4_general_ci NOT NULL,
  website VARCHAR(255) COLLATE utf8mb4_general_ci NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
)";

$sql_posts = "CREATE TABLE IF NOT EXISTS posts (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT(11) NOT NULL,
  description TEXT COLLATE utf8mb4_general_ci NOT NULL,
  image VARCHAR(50) COLLATE utf8mb4_general_ci,
  video VARCHAR(50) COLLATE utf8mb4_general_ci,
  upload_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
)";

$sql_moments = "CREATE TABLE IF NOT EXISTS moments (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT(11) NOT NULL,
  image VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL,
  video VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL,
  caption TEXT COLLATE utf8mb4_general_ci NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  expiration_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
)";

$sql_messages = "CREATE TABLE IF NOT EXISTS messages (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  sender_id INT(11) NOT NULL,
  recipient_id INT(11) NOT NULL,
  message TEXT COLLATE utf8mb4_general_ci NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (sender_id) REFERENCES users(id),
  FOREIGN KEY (recipient_id) REFERENCES users(id)
)";

$sql_loves = "CREATE TABLE IF NOT EXISTS loves (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  post_id INT(11) NOT NULL,
  user_id INT(11) NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
)";

$sql_comments = "CREATE TABLE IF NOT EXISTS comments (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  post_id INT(11) NOT NULL,
  user_id INT(11) NOT NULL,
  comment TEXT COLLATE utf8mb4_general_ci NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
)";

$sql_shares = "CREATE TABLE IF NOT EXISTS shares (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  post_id INT(11) NOT NULL,
  user_id INT(11) NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
)";

$sql_bookmarks = "CREATE TABLE IF NOT EXISTS bookmarks (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  post_id INT(11) NOT NULL,
  user_id INT(11) NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
)";

$sql_search_history = "CREATE TABLE IF NOT EXISTS search_history (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT(11) NOT NULL,
  search_query VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
)";

// Execute SQL statements
$sql_queries = array(
  $sql_users,
  $sql_profiles,
  $sql_posts,
  $sql_moments,
  $sql_messages,
  $sql_loves,
  $sql_comments,
  $sql_shares,
  $sql_bookmarks,
  $sql_search_history
);

foreach ($sql_queries as $sql_query) {
  if ($conn->query($sql_query) !== TRUE) {
      die("Error creating table: $sql_query - " . $conn->error);
  }
}
?>