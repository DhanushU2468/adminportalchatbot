// Simple form validation before submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});

// Example of chatbot interaction with dynamic features, if needed
