$(document).ready(function() {              
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