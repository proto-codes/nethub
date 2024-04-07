$(document).ready(function() {
    // Check if user is authenticated
    $.ajax({
        url: 'php/session_check.php',
        success: function(data) {
            if (data.trim() === 'Authenticated') {
                window.location.href = 'http://localhost/nethub';
            } else {
                console.log(data);
            }
        },
        error: function(xhr, status, error) {
            console.error('There was a problem with the AJAX request:', error);
        }
    });

    // Signin auth
    $("#signinForm").submit(function(e){
        e.preventDefault();
        var formData = $(this).serialize();
        
        $.ajax({
            url: "php/signin_auth.php",
            type: "POST",
            data: formData,
            success: function(response){
                if(response.trim() === 'Validation successful'){
                    $("#signinErrorMsg").text(""); // Clear error message
                    $("#signinForm")[0].submit(); // submit form
                    // Redirect user to home page
                    window.location.href = 'http://localhost/nethub';
                } else {
                    $("#signinErrorMsg").text(response); // Display error message
                    $("#signinErrorMsg").addClass('blink');
                    setTimeout(function() {
                        $("#signinErrorMsg").removeClass('blink');
                    }, 1000);
                }
            },
            error: function(xhr, status, error){
                console.error('There was a problem with the AJAX request:', error);
            }
        });
    });

    // Signup auth
    $("#signupForm").submit(function(e){
        e.preventDefault();
        var formData = $(this).serialize();
        
        $.ajax({
            url: "php/signup_auth.php",
            type: "POST",
            data: formData,
            success: function(response){
                if(response.success === 'Registration successful!'){
                    $("#signupErrorMsg").text(""); // Clear error message
                    $("#signupForm")[0].submit(); // submit form
                    localStorage.setItem("signupSuccessMessage", response);
                } else {
                    $("#signupErrorMsg").text(response); // Display error message
                    $("#signupErrorMsg").addClass('blink');
                    setTimeout(function() {
                        $("#signupErrorMsg").removeClass('blink');
                    }, 1000);
                }
            },
            error: function(xhr, status, error){
                console.error('There was a problem with the AJAX request:', error);
            }
        });
    });

    // Display success message
    if (localStorage.getItem("signupSuccessMessage")) {
        $("#signupSuccessMsg").text(localStorage.getItem("signupSuccessMessage"));
        // Delay for 5 seconds (5000 milliseconds)
        setTimeout(function() {
            // Fade out"
            $("#signupSuccessMsg").fadeOut("slow");
            // Remove item from localStorage
            localStorage.removeItem("signupSuccessMessage");
        }, 5000);
    }

    // When sign-up modal is shown
    $('#signupModal').on('show.bs.modal', function() {
        // Update title
        document.title = 'Nethub Signup';
    });

    // When sign-up modal is hidden
    $('#signupModal').on('hidden.bs.modal', function() {
        // Reset title
        document.title = 'Nethub Signin';
    });

    $('#birthday').on("focus", function() {
        $(this).attr("type", "date");
    });

    $('#birthday').on("blur", function() {
        if ($(this).val() === "") {
            $(this).attr("type", "text");
        } else {
            $(this).attr("type", "date");
        }
    });

    $('#password').on('input', function() {
        if ($(this).val().trim() === '') {
            $('#signinToggle').hide();
        } else {
            $('#signinToggle').show();
        }
    });
    
    $('#signinToggle').click(function() {
      if ($(this).text() === 'Show') {
        $(this).text('Hide');
        $('#password').attr('type', 'text');
      } else {
        $(this).text('Show');
        $('#password').attr('type', 'password');
      }
    });

    $('#signupPassword').on('input', function() {
        if ($(this).val().trim() === '') {
            $('#signupToggle').hide();
        } else {
            $('#signupToggle').show();
        }
    });

    $('#signupToggle').click(function() {
      if ($(this).text() === 'Show') {
        $(this).text('Hide');
        $('#signupPassword').attr('type', 'text');
      } else {
        $(this).text('Show');
        $('#signupPassword').attr('type', 'password');
      }
    });

    $('#confirm_password').on('input', function() {
        if ($(this).val().trim() === '') {
            $('#signupToggle1').hide();
        } else {
            $('#signupToggle1').show();
        }
    });
    
    $('#signupToggle1').click(function() {
      if ($(this).text() === 'Show') {
        $(this).text('Hide');
        $('#confirm_password').attr('type', 'text');
      } else {
        $(this).text('Show');
        $('#confirm_password').attr('type', 'password');
      }
    });
});