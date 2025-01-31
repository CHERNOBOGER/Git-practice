// Get the contact form element
const contactForm = document.getElementById('contact-form');

// Add an event listener for the form submission
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Perform some action with the form data (e.g., send it to a server)
  console.log('Form submitted:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Reset the form
  contactForm.reset();
});
