const { profile } = require("console");
const { addAbortListener } = require("events");

console.log("helloghfh");

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(signupForm);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });

    // Send POST request to /person/signup endpoint
    fetch("/person/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Store the JWT token in local storage
        localStorage.setItem("token", data.token);
        console.log("User signed up successfully:", data.response);
        alert("User signed up successfully!");
        // Redirect to login page or perform any other action
      })
      .catch((error) => {
        console.error("Error signing up user:", error);
        alert("An error occurred while signing up. Please try again.");
      });
  });
});

//CODE FOR LOGIN FUNCTION--------------------------------------------------->

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(loginForm);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });

    // Send POST request to /person/login endpoint
    fetch("/person/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Store the JWT token in local storage
        localStorage.setItem("token", data.token);
        console.log("User logged in successfully");

        // Redirect to the dashboard or perform any other action
        window.location.href = "/dashboard.html";
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Invalid username or password. Please try again.");
      });
  });
});

//Profile directingg
const Profiling = document.getElementById("profilebtn");
Profiling.addEventListener("click", () => {
  window.location.href = "/person/profile";
});
