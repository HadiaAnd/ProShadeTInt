document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('confirmation').textContent = "Thank you! We'll contact you to confirm your appointment.";
  this.reset();
});
