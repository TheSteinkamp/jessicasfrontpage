document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('comment').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    fetch('http://localhost:8080/jessica/contact', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('message sent');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error');
    });
});