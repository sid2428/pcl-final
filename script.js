// script.js

document.getElementById('queryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  this.reset();
});
