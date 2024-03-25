$(document).ready(function() {
    function toggleVisibilityOnClick() {
        if ($(".content").is(":visible") && $(window).width() <= 629) {
            $("header").hide();
            $("nav").hide();
            $("section").css("cssText", "padding: 0 !important;");
        }
    }

    function toggleVisibilityOnResize() {
        if ($(window).width() <= 977) {
            if ($(".content").is(":visible") && $(".message_list").is(":visible")) {
                $(".message_list").show();
                $(".content").hide();
            }
            // Bind click event handlers when the window width is less than or equal to 629 pixels
            $(".message").on("click", function() {
                $(".message_list").hide();
                $(".content").show();
                toggleVisibilityOnClick();
            });

            $(".exitMsg").on("click", function() {
                $(".message_list").show();
                $(".content").hide();
                $("header").css("display", "");
                $("nav").css("display", "");
                $("section").css("padding", "");
            });
        } else {
            // Unbind click event handlers when the window width is greater than 629 pixels
            $(".message, .exitMsg").off("click");
            $(".message_list").show();
            $(".content").show();
        }
        if ($(".content").is(":visible") && $(window).width() > 629) {
            $("header").css("display", "");
            $("nav").css("display", "");
            $("section").css("padding", "");
        } else if ($(".content").is(":visible") && $(window).width() <= 629) {
            $("header").hide();
            $("nav").hide();
            $("section").css("cssText", "padding: 0 !important;");
        }
    }
    toggleVisibilityOnResize();

    $(window).resize(function() {
        toggleVisibilityOnResize();
    });
    
    $("#message_bar").on("input", function() {
        if ($(this).val().trim() !== "") {
            $("#send_message").show();
            $("#voice_note").hide();
        } else {
            $("#send_message").hide();
            $("#voice_note").show();
        }
        // Check if the textarea has reached its maximum height
        if ($(this)[0].scrollHeight > 150) {
            $(this).css('height', '150px'); // Set height to maximum
        } else {
            $(this).css('height', 'auto'); // Reset height to auto
            $(this).css('height', $(this)[0].scrollHeight + 'px'); // Set new height
        }
    });
})