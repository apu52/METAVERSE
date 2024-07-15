document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupClose = document.getElementById('popup-close');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name) {
            showPopup('Please enter your name.');
        } else if (!validateEmail(email)) {
            showPopup('Please enter a valid email address.');
        } else if (!message) {
            showPopup('Please enter your message.');
        } else {
            showPopup('Form submitted successfully!', true);
        }
    });

    popupClose.addEventListener('click', () => {
        closePopup();
    });

    function showPopup(message, success = false) {
        popupMessage.textContent = message;
        popupMessage.style.color = success ? 'white' : 'red';
        popup.style.display = 'block';
        setTimeout(closePopup, 3000);
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
