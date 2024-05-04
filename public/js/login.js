$(document).ready(function () {
    // Login form validation
    $(".login-form form").on("submit", function (event) {
      event.preventDefault();
  
      var username = $(this).find('input[name="username"]').val();
      var password = $(this).find('input[name="password"]').val();
  
      if (!username || !password) {
        alert("Username and password must not be empty");
        return;
      }
  
      if (
        !/\d/.test(password) ||
        !/[!@#$%^&*]/.test(password) ||
        password.length < 8
      ) {
        alert(
          "Password length should be 8 characters long and it must contain at least one number and one special character"
        );
        return;
      }
  
      //   alert("Username: " + username + "\nPassword: " + password);
      alert("login successful");
    });
  
    // Signup form validation
    $(".signup-form form").on("submit", function (event) {
      event.preventDefault();
  
      var username = $(this).find('input[name="username"]').val();
      var email = $(this).find('input[name="email"]').val();
      var password = $(this).find('input[name="password"]').val();
      var confirmPass = $(this).find('input[name="confirmPass"]').val();
      var phone = $(this).find('input[name="phone"]').val();
      var address = $(this).find('input[name="address"]').val();
      var city = $(this).find('input[name="city"]').val();
      var country = $(this).find('input[name="country"]').val();
      var age = $(this).find('input[name="age"]').val();
  
  
      if (
        !username ||
        !email ||
        !password ||
        !confirmPass ||
        !phone ||
        !address ||
        !city ||
        !country ||
        !age
      ) {
        alert("All fields must not be empty");
        return;
      }
  
      if (
        !/\d/.test(password) ||
        !/[!@#$%^&*]/.test(password) ||
        password.length < 8
      ) {
        alert(
          "Password length should be 8 characters long and it must contain at least one number and one special character"
        );
        return;
      }
  
      if (password !== confirmPass) {
          alert("passwords do not match");
          return;  
      }
  
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        alert("Email must be in a valid format");
        return;
      }
  
      if (parseInt(age) <= 15) {
          alert("Age must be above 15");
          return;
        }
  
      if (phone.length !== 11) {
          alert("Phone number must be 11 digits long");
          return;
      }
  
      alert("signup successful");
      $(".login-form").show();
      $(".signup-form").hide();
    });
  
    // Show signup form and hide login form when signup button is clicked
    $("#signup-link").on("click", function () {
      $(".signup-form").show();
      $(".login-form").hide();
    });
  
    // Show login form and hide signup form when login button is clicked
    $("#login-link").on("click", function () {
      $(".login-form").show();
      $(".signup-form").hide();
    });
  });
  