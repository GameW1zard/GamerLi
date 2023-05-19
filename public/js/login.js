const loginHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const respons = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (respons.ok) {
            document.location.replace('/');
        } else {
            alert('Oops! Something went wrong. Please try again!');
        }
    }
};

document
    .querySelector('#login-form')
    .addEventListener('submit', loginHandler);
