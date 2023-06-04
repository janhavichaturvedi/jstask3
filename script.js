document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages and reset input borders
    var errorMessages = document.querySelectorAll(".error-message");
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].remove();
    }

    var inputFields = document.querySelectorAll("input, textarea");
    for (var i = 0; i < inputFields.length; i++) {
      inputFields[i].classList.remove("error");
    }

    // Get form field values
    var name = document.getElementById("name").value;
    var website = document.getElementById("website").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var hasErrors = false; // Flag to track if there are any errors

    // Check for empty fields and display error messages
    if (!name) {
      displayErrorMessage("name", "Please enter your name.");
      hasErrors = true;
    }

    if (!website) {
      displayErrorMessage("website", "Please enter your website URL.");
      hasErrors = true;
    }

    if (!email) {
      displayErrorMessage("email", "Please enter your email address.");
      hasErrors = true;
    }

    if (!message) {
      displayErrorMessage("message", "Please enter your message.");
      hasErrors = true;
    }

    // Check email format using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !email.match(emailRegex)) {
      displayErrorMessage("email", "Please enter a valid email address.");
      hasErrors = true;
    }

    // Check website format using regular expression
    var websiteRegex = /^(http|https):\/\/[^ "]+$/;
    if (website && !website.match(websiteRegex)) {
      displayErrorMessage("website", "Please enter a valid website URL.");
      hasErrors = true;
    }

    // If there are errors, highlight input fields and show all error messages
    if (hasErrors) {
      inputFields.forEach(function (field) {
        if (!field.value) {
          field.classList.add("error");
        }
      });
      return;
    }

    // Form is valid, you can submit or process the data here
    alert("Form submitted successfully!");
  });

function displayErrorMessage(fieldId, message) {
  var field = document.getElementById(fieldId);
  var errorMessage = document.createElement("span");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;
  field.parentNode.insertBefore(errorMessage, field.nextSibling);
}
