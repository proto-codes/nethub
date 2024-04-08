$(document).ready(function() {
    // AJAX request to fetch JSON data from PHP script
    $.ajax({
        url: 'php/fetch.php',
        type: 'POST',
        dataType: 'json',
        success: function(combinedData) {
            // // Display JSON combinedData
            // console.log(combinedData);

            // // Display only the nickname from profile data
            // var nickname = combinedData.profile_data.nickname;
            // console.log("Nickname:", nickname);

            // // Iterate over each post and display
            // combinedData.post_data.forEach(function(post) {
            //     console.log(post.upload_time);
            // });

            // Access data
            const userData = combinedData.user_data
            const profileData = combinedData.profile_data

            // Append data to HTML element
            $("#usersMoments").append(`<img src="https://eu.ui-avatars.com/api/?name=${userData.firstname}+${userData.lastname}" alt="Moments" id="profile_photo">
            <span>&#43;</span>
            <p class="text-truncate text-center" id="username">${userData.username}</p>`)
        },
        error: function(xhr, status, error) {
            // Handle errors
            console.error(xhr.responseText);
        }
    });

    $("#usersMoments").on("click", function() {
        window.location.href = "profile";
    })
})