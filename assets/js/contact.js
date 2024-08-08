document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupClose = document.getElementById('popup-close');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name) {
            showPopup('Please enter your name.');
        } else if (!validateEmail(email)) {
            showPopup('Please enter a valid email address.');
        } else if (!message) {
            showPopup('Please enter your message.');
        } else {
            try {
                const response = await fetch('http://localhost:3000/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message }),
                });

                const data = await response.json();
                if (data.success) {
                    showPopup('We Have Recieved Your Query. We Will Contact You Soon!!', true);
                } else {
                    showPopup('Failed to send message. Please try again.');
                }
            } catch (error) {
                showPopup('An error occurred. Please try again.');
            }
        }
    });

    popupClose.addEventListener('click', () => {
        closePopup();
    });

    function showPopup(message, success = false) {
        popupMessage.textContent = message;
        popupMessage.style.color = success ? 'white' : 'red';
        popup.style.textAlign = "center";
        popup.style.display = 'block';
        setTimeout(closePopup, 3000); // Popup will close automatically after 3 seconds
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
