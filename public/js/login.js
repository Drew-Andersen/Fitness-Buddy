const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      // Send a POST request to the login route
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in. Please check your email and password and try again.');
      }
    }
};

const signUpFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up.')
    }
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document 
  .querySelector('.signup-form')
  .addEventListener('submit', signUpFormHandler);