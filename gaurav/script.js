// script.js
// Form validation
const contactForm = document.getElementById('contact-form');
const suggestionForm = document.getElementById('suggestion-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Form submission code here
  alert('Form submitted successfully!');
  contactForm.reset();
});

suggestionForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const suggestion = document.getElementById('suggestion').value.trim();

  if (suggestion === '') {
    alert('Please enter a suggestion.');
    return;
  }

  // Suggestion submission code here
  alert('Suggestion submitted successfully!');
  suggestionForm.reset();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}