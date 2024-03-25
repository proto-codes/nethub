$(document).ready(function () {
    // Check if user is authenticated
    $.ajax({
        url: 'php/session_check.php',
        success: function(data) {
            if (data.trim() === 'Not authenticated!') {
                window.location.href = 'user_auth.html';
            } else {
                console.log(data);
            }
        },
        error: function(xhr, status, error) {
            console.error('There was a problem with the AJAX request:', error);
        }
    });

    // Load content from include.html
    $(".includedContent").load("included.html");

    $("#search_bar").on("focus", function() {
        $(".search_pop").show();
    });
    
    $("#search_input").on("input", function() {
        if ($("#search_input").val().trim() !== "") {
            $(".recent_result").hide();
        } else {
            $(".recent_result").show();
        }
    });
    
    $("#search_bar").on("input", function() {
        if ($("#search_bar").val().trim() !== "") {
            $(".recent_result").hide();
        } else {
            $(".recent_result").show();
        }
    });
    
    $("#search").on("click", function(event) {
        if ($(".search_pop").is(":visible")) {
            $(".search_pop").hide();
        } else {
            $(".search_pop").show();
            $("#search_input").focus();
            $(".notifications_pop").hide();
            $(".create_pop").hide();
            $(".menu_pop").hide();
        }
        event.stopPropagation();
    });

    $("#search1").on("click", function(event) {
        if ($(".search_pop").is(":visible")) {
            $(".search_pop").hide();
        } else {
            $(".search_pop").show();
            $("#search_input").focus();
            $(".notifications_pop").hide();
            $(".create_pop").hide();
            $(".menu_pop").hide();
        }
        event.stopPropagation();
    });
    
    $(document).on("click", function(event) {
        const isClickInsidesearch_pop = $(event.target).closest(".search_pop").length > 0;
        const isClickInsidesearch_bar = $("#search_bar").is(event.target);
        
        if (!isClickInsidesearch_pop && !isClickInsidesearch_bar) {
            $(".search_pop").hide();
        }
    });       
    
    $("#back").on("click", function() {
        $(".search_pop").hide();
    });
    
    $("#notifications").on("click", function(event) {
        if ($(".notifications_pop").is(":visible")) {
            $(".notifications_pop").hide();
        } else {
            $(".notifications_pop").show();
            $(".search_pop").hide();
            $(".create_pop").hide();
            $(".menu_pop").hide();
        }
        event.stopPropagation();
    });
    
    $("#notifications1").on("click", function(event) {
        if ($(".notifications_pop").is(":visible")) {
            $(".notifications_pop").hide();
        } else {
            $(".notifications_pop").show();
            $(".search_pop").hide();
            $(".create_pop").hide();
            $(".menu_pop").hide();
        }
        event.stopPropagation();
    });
    
    $(document).on("click", function(event) {
        const isClickInsidenotifications_pop = $(event.target).closest(".notifications_pop").length > 0;
        if (!isClickInsidenotifications_pop) {
            $(".notifications_pop").hide();
        }
    });
    
    
    $("#menu").on("click", function(event) {
        if ($(".menu_pop").is(":visible")) {
            $(".menu_pop").hide();
        } else {
            $(".menu_pop").show();
            $(".search_pop").hide();
            $(".notifications_pop").hide();
            $(".create_pop").hide();
        }
        event.stopPropagation();
    });
    
    $("#menu1").on("click", function(event) {
        if ($(".menu_pop").is(":visible")) {
            $(".menu_pop").hide();
        } else {
            $(".menu_pop").show();
            $(".search_pop").hide();
            $(".notifications_pop").hide();
            $(".create_pop").hide();
        }
        event.stopPropagation();
    });

    $(document).on("click", function(event) {
        const isClickInsideMenu_pop = $(event.target).closest(".menu_pop").length > 0;
        if (!isClickInsideMenu_pop) {
            $(".menu_pop").hide();
        }
    });
    
    $("#create").on("click", function(event) {
        if ($(".create_pop").is(":visible")) {
            $(".create_pop").hide();
        } else {
            $(".create_pop").show();
            $(".menu_pop").hide();
            $(".notifications_pop").hide();
            $(".search_pop").hide();
        }
        event.stopPropagation();
    });
    
    $("#create1").on("click", function(event) {
        if ($(".create_pop").is(":visible")) {
            $(".create_pop").hide();
        } else {
            $(".create_pop").show();
            $(".menu_pop").hide();
            $(".notifications_pop").hide();
            $(".search_pop").hide();
        }
        event.stopPropagation();
    });

    $(document).on("click", function(event) {
        const isClickInsidecreate_pop = $(event.target).closest(".create_pop").length > 0;
        if (!isClickInsidecreate_pop) {
            $(".create_pop").hide();
        }
    });
    
    const setStyles = function(mode) {
        switch (mode) {
            case 'default':
                const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
                
                $("html").css("--bg-color-900", prefersDarkMode ? "#111" : "#eee");
                $("html").css("--bg-gray-500", prefersDarkMode ? "#333" : "#ccc");
                $("html").css("--bg-light-100", prefersDarkMode ? "#555" : "#aaa");
                $("html").css("--text-color-900", prefersDarkMode ? "#eee" : "#111");
                $("html").css("--text-gray-100", prefersDarkMode ? "#999" : "#666");
                $("html").css("--skin-color", "#20e");
                break;
            case 'dark':
                $("html").css("--bg-color-900", "#111");
                $("html").css("--bg-gray-500", "#333");
                $("html").css("--bg-light-100", "#555");
                $("html").css("--text-color-900", "#eee");
                $("html").css("--text-gray-100", "#999");
                $("html").css("--skin-color", "#20e");
                break;
            case 'light':
                $("html").css("--bg-color-900", "#eee");
                $("html").css("--bg-gray-500", "#ccc");
                $("html").css("--bg-light-100", "#aaa");
                $("html").css("--text-color-900", "#111");
                $("html").css("--text-gray-100", "#333");
                $("html").css("--skin-color", "#20e");
                break;
            default:
                break;
        }
    };
    
    const handleModeChange = function(mode) {
        $("#default").prop("checked", mode === 'default');
        $("#dark_mode").prop("checked", mode === 'dark');
        $("#light_mode").prop("checked", mode === 'light');
        setStyles(mode);
        localStorage.setItem('selectedMode', mode);
    };
    
    $("#default").on("change", function() {
        handleModeChange('default');
    });
    
    $("#dark_mode").on("change", function() {
        handleModeChange('dark');
    });
    
    $("#light_mode").on("change", function() {
        handleModeChange('light');
    });
    
    const storedMode = localStorage.getItem('selectedMode');
    if (storedMode) {
        handleModeChange(storedMode);
    };
})