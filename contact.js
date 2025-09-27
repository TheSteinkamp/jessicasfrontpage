document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://jessicaspage-production.up.railway.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Message was sent.');
            alert('Message was sent.');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error');
        });
});