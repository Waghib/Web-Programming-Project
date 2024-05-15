$(document).ready(function () {
  function displayError(selector, message) {
      $(selector).text(message).show();
  }

  function displaySuccess(selector, message) {
      $(selector).text(message).show();
  }

  function clearErrors() {
      $('.error-message').text('');
  }

  // Login form validation
  $(".login-form form").on("submit", function (event) {
      event.preventDefault();
      clearErrors();

      var username = $(this).find('input[name="username"]').val();
      var password = $(this).find('input[name="password"]').val();

      if (!username) {
          displayError('#login-username-error', "Username must not be empty");
          return;
      }

      if (!password) {
          displayError('#login-password-error', "Password must not be empty");
          return;
      }

      if (!/\d/.test(password) || !/[!@#$%^&*]/.test(password) || password.length < 8) {
          displayError('#login-password-error', "Password length should be 8 characters long and it must contain at least one number and one special character");
          return;
      }

      alert("Login successful");
  });

  // Signup form validation
  $(".signup-form form").on("submit", function (event) {
      event.preventDefault();
      clearErrors();

      var username = $(this).find('input[name="username"]').val();
      var email = $(this).find('input[name="email"]').val();
      var password = $(this).find('input[name="password"]').val();
      var confirmPass = $(this).find('input[name="confirmPass"]').val();
      var phone = $(this).find('input[name="phone"]').val();
      var address = $(this).find('input[name="address"]').val();
      var city = $(this).find('input[name="city"]').val();
      var country = $(this).find('input[name="country"]').val();
      var age = $(this).find('input[name="age"]').val();
      // var emailVerifcation = $(this).find('input[name="email-sent"]').val();


      if (!username) {
          displayError('#signup-username-error', "Username must not be empty");
          return;
      }

      if (!email) {
          displayError('#signup-email-error', "Email must not be empty");
          return;
      }


      if (!password) {
          displayError('#signup-password-error', "Password must not be empty");
          return;
      }

      if (!confirmPass) {
          displayError('#signup-confirmPass-error', "Confirm password must not be empty");
          return;
      }

      if (!phone) {
          displayError('#signup-phone-error', "Phone number must not be empty");
          return;
      }

      if (!address) {
          displayError('#signup-address-error', "Address must not be empty");
          return;
      }

      if (!city) {
          displayError('#signup-city-error', "City must not be empty");
          return;
      }

      if (!country) {
          displayError('#signup-country-error', "Country must not be empty");
          return;
      }

      if (!age) {
          displayError('#signup-age-error', "Age must not be empty");
          return;
      }

      if (!/\d/.test(password) || !/[!@#$%^&*]/.test(password) || password.length < 8) {
          displayError('#signup-password-error', "Password length should be 8 characters long and it must contain at least one number and one special character");
          return;
      }

      if (password !== confirmPass) {
          displayError('#signup-confirmPass-error', "Passwords do not match");
          return;
      }

      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
          displayError('#signup-email-error', "Email must be in a valid format");
          return;
      }

      if (parseInt(age) <= 15) {
          displayError('#signup-age-error', "Age must be above 15");
          return;
      }

      if (phone.length !== 11) {
          displayError('#signup-phone-error', "Phone number must be 11 digits long");
          return;
      }

      alert("Signup successful");
      $(".login-form").show();
      $(".signup-form").hide();
  });

  // Forget Password form validation
  $(".forgetPass-form form").on("submit", function (event) {
      event.preventDefault();
      clearErrors();

      var email = $(this).find('input[name="email"]').val();

      if (!email) {
          displayError('#forgetPass-email-error', "Email must not be empty");
          return;
      }

      // Simulate sending email (display success message)
      displaySuccess('#forgetPass-email-success', "Email sent");

      // Additional validation or action can be added here (e.g., send email via AJAX)

      // alert("Send Email button clicked with email: " + email);
      // Code to send email or further actions here
  });

  // Show signup form and hide login form when signup button is clicked
  $("#signup-link").on("click", function () {
      $(".signup-form").show();
      $(".login-form").hide();
      $(".forgetPass-form").hide();
  });

  // Show login form and hide signup form when login button is clicked
  $("#login-link").on("click", function () {
      $(".login-form").show();
      $(".signup-form").hide();
      $(".forgetPass-form").hide();
  });

  // Show forgetPassword form and hide login form when forgetPassword button is clicked
  $("#forgetPass-link").on("click", function () {
      $(".forgetPass-form").show();
      $(".login-form").hide();
      $(".signup-form").hide();
  });

  // Back to login form from forgetPassword form
  $("#backToLogin").on("click", function () {
      $(".login-form").show();
      $(".forgetPass-form").hide();
      $(".signup-form").hide();
  });
});