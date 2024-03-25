$(document).ready(function() {
    // AJAX request to fetch JSON data from PHP script
    $.ajax({
        url: 'php/fetch.php',
        type: 'POST',
        dataType: 'json',
        success: function(combinedData) {
            // Display JSON combinedData
            console.log(combinedData);

            // Display only the nickname from profile data
            var nickname = combinedData.profile_data.nickname;
            console.log("Nickname:", nickname);

            // Iterate over each post and display
            combinedData.post_data.forEach(function(post) {
                console.log(post.upload_time);
            });
        },
        error: function(xhr, status, error) {
            // Handle errors
            console.error(xhr.responseText);
        }
    });
})