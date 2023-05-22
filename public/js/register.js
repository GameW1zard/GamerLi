const registerHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const user_name = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (user_name && password) {
        const respons = await fetch('/api/UserTable', {
            method: 'POST',
            body: JSON.stringify({ user_name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (respons.ok) {
            //console.log("hello");
            // res.status(200).json()
            document.location.replace('/');
        } else {
            alert('Oops! Something went wrong. Please try again!');
        }
    }
};

document
    .querySelector('#register-form')
    .addEventListener('submit', registerHandler);