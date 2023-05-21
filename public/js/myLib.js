// Function to handle console submission
const handleConsoleSubmit = async (event) => {
    event.preventDefault();

    // Collect console name from the form input
    const consoleName = document.querySelector('#consoleName').value.trim();

    if (consoleName) {
        try {
            // Send a POST request to the server API endpoint for adding a console
            const response = await fetch('/api/ConsoleTable', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ consoleName }),
            });

            if (response.ok) {
                // Refresh the page to display the updated consoles list
                location.reload();
            } else {
                // Display an error message if the request was not successful
                alert('Failed to add console');
            }
        } catch (error) {
            // Handle any network or server errors
            console.log(error);
            alert('An error occurred');
        }
    }
};

// Function to handle game submission
const handleGameSubmit = async (event) => {
    event.preventDefault();

    // Collect game name from the form input
    const gameName = document.querySelector('#gameName').value.trim();

    if (gameName) {
        try {
            // Send a POST request to the server API endpoint for adding a game
            const response = await fetch('/api/GamesTable', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ gameName }),
            });

            if (response.ok) {
                // Refresh the page to display the updated games list
                location.reload();
            } else {
                // Display an error message if the request was not successful
                alert('Failed to add game');
            }
        } catch (error) {
            // Handle any network or server errors
            console.log(error);
            alert('An error occurred');
        }
    }
};

// Attach event listeners to the console and game submission forms
document
    .querySelector('#consoleForm')
    .addEventListener('submit', handleConsoleSubmit);

document
    .querySelector('#gameForm')
    .addEventListener('submit', handleGameSubmit);