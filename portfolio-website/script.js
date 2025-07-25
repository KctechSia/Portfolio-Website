// Grab the form and status message elements
const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");

// Listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop the page from refreshing

  // Get values from the form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Log them to the console (for beginner testing)
  console.log("Form Submitted!");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate form processing and success
  statusMessage.textContent = "Sending...";

  setTimeout(() => {
    statusMessage.textContent = "Message sent successfully!";
    form.reset(); // Clear the form
  }, 1500);
});
