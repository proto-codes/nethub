<?php
// Include database connection file
require_once "db_connect.php";

session_start();

// Check if user is logged in
if(isset($_SESSION['user_id'])) {
    // Initialize variable for session user_id
    $user_id = htmlspecialchars($_SESSION['user_id'], ENT_QUOTES, 'UTF-8');

    // Convert dates to readable format
    $birthDate = date('d M, Y', strtotime($_SESSION['birthday']));
    $lastSeen = date('d M, Y', strtotime($_SESSION['last_signin']));
    $joinedDate = date('d M, Y', strtotime($_SESSION['created_at']));

    // Encode user data into an array
    $userData = array(
        'username' => htmlspecialchars($_SESSION['username'], ENT_QUOTES, 'UTF-8'),
        'firstname' => htmlspecialchars($_SESSION['firstname'], ENT_QUOTES, 'UTF-8'),
        'lastname' => htmlspecialchars($_SESSION['lastname'], ENT_QUOTES, 'UTF-8'),
        'email' => htmlspecialchars($_SESSION['email'], ENT_QUOTES, 'UTF-8'),
        'phone_number' => htmlspecialchars($_SESSION['phone_number'], ENT_QUOTES, 'UTF-8'),
        'birthday' => htmlspecialchars($birthDate, ENT_QUOTES, 'UTF-8'),
        'followers' => htmlspecialchars($_SESSION['followers'], ENT_QUOTES, 'UTF-8'),
        'following' => htmlspecialchars($_SESSION['following'], ENT_QUOTES, 'UTF-8'),
        'last_signin' => htmlspecialchars($lastSeen, ENT_QUOTES, 'UTF-8'),
        'created_at' => htmlspecialchars($joinedDate, ENT_QUOTES, 'UTF-8')
    );

    // SQL query to fetch profile data
    $profile_sql = "SELECT user_id, cover_photo, profile_photo, nickname, bio, city, state, country, profession, relationship, website FROM profiles WHERE user_id = ?";

    // Prepare and bind parameters for the query
    $profile_stmt = $conn->prepare($profile_sql);
    $profile_stmt->bind_param("i", $user_id);

    // Execute the query
    $profile_stmt->execute();

    // Bind result variables to fetch data
    $profile_stmt->bind_result($profile_user_id, $cover_photo, $profile_photo, $nickname, $bio, $city, $state, $country, $profession, $relationship, $website);

    // Fetch profile data
    $profile_stmt->fetch();

    // Close the statement for profile retrieval
    $profile_stmt->close();

    // Encode profile data into an array
    $profileData = array(
        'profile_user_id' => htmlspecialchars($profile_user_id, ENT_QUOTES, 'UTF-8'),
        'cover_photo' => htmlspecialchars($cover_photo, ENT_QUOTES, 'UTF-8'),
        'profile_photo' => htmlspecialchars($profile_photo, ENT_QUOTES, 'UTF-8'),
        'nickname' => htmlspecialchars($nickname, ENT_QUOTES, 'UTF-8'),
        'bio' => htmlspecialchars($bio, ENT_QUOTES, 'UTF-8'),
        'city' => htmlspecialchars($city, ENT_QUOTES, 'UTF-8'),
        'state' => htmlspecialchars($state, ENT_QUOTES, 'UTF-8'),
        'country' => htmlspecialchars($country, ENT_QUOTES, 'UTF-8'),
        'profession' => htmlspecialchars($profession, ENT_QUOTES, 'UTF-8'),
        'relationship' => htmlspecialchars($relationship, ENT_QUOTES, 'UTF-8'),
        'website' => htmlspecialchars($website, ENT_QUOTES, 'UTF-8'),
    );

    // Fetch and store posts data in session variables
    $posts_sql = "SELECT * FROM posts WHERE user_id = ?";

    // Prepare and bind parameters
    $posts_stmt = $conn->prepare($posts_sql);
    $posts_stmt->bind_param("i", $user_id);

    // Execute the query
    $posts_stmt->execute();

    // Bind result variables
    $posts_stmt->bind_result($id, $user_id, $description, $image, $video, $upload_time);

    // Encode post data into an array
    $postData = array();
    while ($posts_stmt->fetch()) {
        // Convert the upload time string to a DateTime object
        $uploadTime = new DateTime($upload_time);

        // Get the current time
        $currentTime = new DateTime();

        // Calculate the difference between the current time and upload time
        $timeDiff = $currentTime->diff($uploadTime);

        // Format the time difference for display
        if ($timeDiff->y > 0) {
            $time_ago = $timeDiff->y . " year(s) ago";
        } elseif ($timeDiff->m > 0) {
            $time_ago = $timeDiff->m . " month(s) ago";
        } elseif ($timeDiff->d > 0) {
            $time_ago = $timeDiff->d . " day(s) ago";
        } elseif ($timeDiff->h > 0) {
            $time_ago = $timeDiff->h . " hour(s) ago";
        } elseif ($timeDiff->i > 0) {
            $time_ago = $timeDiff->i . " minute(s) ago";
        } else {
            $time_ago = "just now";
        }

        // Add post data to the array
        $postData[] = array(
            'id' => htmlspecialchars($id, ENT_QUOTES, 'UTF-8'),
            'user_id' => htmlspecialchars($user_id, ENT_QUOTES, 'UTF-8'),
            'description' => htmlspecialchars($description, ENT_QUOTES, 'UTF-8'),
            'image' => htmlspecialchars($image, ENT_QUOTES, 'UTF-8'),
            'video' => htmlspecialchars($video, ENT_QUOTES, 'UTF-8'),
            'upload_time' => htmlspecialchars($time_ago, ENT_QUOTES, 'UTF-8')
        ); 
    }

    // Close statement for posts retrieval
    $posts_stmt->close();

    // Combine data into a single array
    $combinedData = array(
        'user_data' => $userData,
        'profile_data' => $profileData,
        'post_data' => $postData
    );

    // Encode the combined data as JSON and output
    echo json_encode($combinedData);

    // Fetch loves for user
    $loves_sql = "SELECT * FROM loves WHERE user_id = ?";
    $loves_stmt = $conn->prepare($loves_sql);
    $loves_stmt->bind_param("i", $user_id);
    $loves_stmt->execute();
    $loves_result = $loves_stmt->get_result();

    if ($loves_result->num_rows > 0) {
        $loves_data = $loves_result->fetch_all(MYSQLI_ASSOC);
    } else {
        $loves_data = 0; // Set value to 0 if no loves found
    }

    // Close statement for loves retrieval
    $loves_stmt->close();

    // Retrieve loves data
    $loves_data = $_SESSION['loves_data'] ?? array();

    // Fetch comments for user
    $comments_sql = "SELECT * FROM comments WHERE user_id = ?";
    $comments_stmt = $conn->prepare($comments_sql);
    $comments_stmt->bind_param("i", $user_id);
    $comments_stmt->execute();
    $comments_result = $comments_stmt->get_result();

    if ($comments_result->num_rows > 0) {
        $comments_data = $comments_result->fetch_all(MYSQLI_ASSOC);
    } else {
        $comments_data = 0; // Set value to 0 if no comments found
    }

    // Close statement for comments retrieval
    $comments_stmt->close();

    // Retrieve comments data
    $comments_data = $_SESSION['comments_data'] ?? array();

    // Fetch shares for user
    $shares_sql = "SELECT * FROM shares WHERE user_id = ?";
    $shares_stmt = $conn->prepare($shares_sql);
    $shares_stmt->bind_param("i", $user_id);
    $shares_stmt->execute();
    $shares_result = $shares_stmt->get_result();

    if ($shares_result->num_rows > 0) {
        $shares_data = $shares_result->fetch_all(MYSQLI_ASSOC);
    } else {
        $shares_data = 0; // Set value to 0 if no shares found
    }

    // Close statement for shares retrieval
    $shares_stmt->close();

    // Retrieve shares data
    $shares_data = $_SESSION['shares_data'] ?? array();

    // Fetch bookmarks for user
    $bookmarks_sql = "SELECT * FROM bookmarks WHERE user_id = ?";
    $bookmarks_stmt = $conn->prepare($bookmarks_sql);
    $bookmarks_stmt->bind_param("i", $user_id);
    $bookmarks_stmt->execute();
    $bookmarks_result = $bookmarks_stmt->get_result();

    if ($bookmarks_result->num_rows > 0) {
        $bookmarks_data = $bookmarks_result->fetch_all(MYSQLI_ASSOC);
    } else {
        $bookmarks_data = 0; // Set value to 0 if no bookmarks found
    }

    // Close statement for bookmarks retrieval
    $bookmarks_stmt->close();

    // Fetch messages from the database
    $sql = "SELECT * FROM messages WHERE sender_id = ? OR recipient_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $user_id, $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    // Initialize an empty array to store fetched messages
    $messages = array();

    // Fetch messages one by one
    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }

    // Close the statement
    $stmt->close();

    $searchResults = []; // Initialize an array to store search results

    // Search query
    if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["search_query"])) {
        $search_query = $_GET["search_query"];
    
        if (!empty($search_query)) {
            $sql = "SELECT * FROM users WHERE username LIKE ? OR firstname LIKE ? OR lastname LIKE ?";
            $stmt = $conn->prepare($sql);
            
            if (!$stmt) {
                // Handle statement preparation error
                die("Statement preparation failed: " . $conn->error);
            }
            
            $search_param = "%$search_query%";
            $stmt->bind_param("sss", $search_param, $search_param, $search_param);
            
            if (!$stmt->execute()) {
                // Handle query execution error
                die("Error executing statement: " . $stmt->error);
            }
            
            $result = $stmt->get_result();
            
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $searchResults[] = [
                        'firstname' => htmlspecialchars($row['firstname']),
                        'lastname' => htmlspecialchars($row['lastname']),
                        'username' => htmlspecialchars($row['username'])
                    ];
                }
            } else {
                $searchResults[] = "No results found";
            }
            
            $stmt->close();
        }
    }    
}

$conn->close();
?>