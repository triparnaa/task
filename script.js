// script.js

// Add event listener to form submit button
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const education = document.querySelector('#education').value;
  const workExperience = document.querySelector('#work-experience').value;
  const skills = document.querySelector('#skills').value;

  // Build resume preview
  const preview = `
    <h2>${name}</h2>
    <p>${email} | ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Work Experience</h3>
    <p>${workExperience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  // Display preview
  document.querySelector('.container').innerHTML += preview;
});
