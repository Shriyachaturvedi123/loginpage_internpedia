// JavaScript functionalities go here
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add login logic here
    // Example: Validate the credentials and show error message if login fails
    document.getElementById("error-message").innerText = "Invalid username or password.";
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add signup logic here
    // Example: Register the new user and show success message
    document.getElementById("signup-message").innerText = "Account created successfully!";
});

document.getElementById("recoveryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add recovery logic here
    // Example: Send recovery email and show success message
    document.getElementById("recovery-message").innerText = "Recovery email sent!";
});
