$(document).ready(function() { 
    $.ajax({
        url: 'php/fetch.php',
        type: 'POST',
        dataType: 'json',
        success: function(combinedData) {            
            // Access data
            const userData = combinedData.user_data
            const profileData = combinedData.profile_data

            // Append data to HTML element
            // https://picsum.photos/640/360
            $("#coverPhoto").append(`<img src="img/Cover_photo_placeholder.png" alt="Cover photo" id="cover_photo">`);

            $("#profilePhoto").append(`<img src="https://eu.ui-avatars.com/api/?name=${userData.firstname}+${userData.lastname}" alt="Profile photo" id="profile_photo">`);

            $("#sessionUser").append(`<h1 class="fs-4">${userData.firstname} ${userData.lastname} <small>${profileData.nickname}</small></h1>
            <p class="text-lowercase mb-3" style="color: var(--text-gray-100);">@${userData.username}</p>`);

            $("#followers").append(`${userData.followers}<p>Followers</p>`);
            $("#following").append(`${userData.following}<p>Following</p>`);

            $("#userInfo").append(`<!-- Bio -->
            <p class="mb-2">${profileData.bio}</p>

            <i class='fas fa-briefcase'><span>${profileData.profession}</span></i>
            
            <i class='fas fa-location-dot'><span>${profileData.country}</span></i>
            
            <i class='fas fa-heart'><span>${profileData.relationship}</span></i>
            
            <i class='fas fa-link'><a href='${profileData.website}'>${profileData.website}</a></i>
            
            <i class='fas fa-cake-candles'><span>${userData.birthday}</span></i>
            
            <i class='fas fa-calendar'><span>${userData.created_at}</span></i>`);
        },
        error: function(xhr, status, error) {
            // Handle errors
            console.error(xhr.responseText);
        }
    });

    $("#cover").on('click', function(event) {
        if ($(".upload_cover").is(":visible")) {
            $(".upload_cover").hide();
        } else {
            $(".upload_cover").show();
            $(".upload_photo").hide();
        }
        event.stopPropagation();
    });

    $(document).on('click', function(event) {
        const isClickInsideupload_cover = $(event.target).closest(".upload_cover").length > 0;
        if (!isClickInsideupload_cover) {
            $(".upload_cover").hide();
        }
    });

    $("#add_cover").on("click", function() {
        $("#profileUpload").click();
    });

    $("#photo").on('click', function(event) {
        if ($(".upload_photo").is(":visible")) {
            $(".upload_photo").hide();
        } else {
            $(".upload_cover").hide();
            $(".upload_photo").show();
        }
        event.stopPropagation();
    });

    $(document).on('click', function(event) {
        const isClickInsideupload_photo = $(event.target).closest(".upload_photo").length > 0;
        if (!isClickInsideupload_photo) {
            $(".upload_photo").hide();
        }
    });

    $("#add_photo").on("click", function() {
        $("#profileUpload").click();
    });

    $("#profileUpload").on('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                $("#image_preview").attr('src', reader.result);
                $(".upload_image").show();
                $(".content").hide();
            };
            reader.readAsDataURL(file);
        }
    });

    $('#edit_btn').click(function() {
        $('#profile').hide();
        $('#edit_profile').show();
    });

    $('#close_edit').click(function() {
        $('#profile').show();
        $('#edit_profile').hide();
    });
});