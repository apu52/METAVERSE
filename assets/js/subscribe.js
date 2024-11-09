document.getElementById('newsletter-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    try {
        const response = await fetch('http://localhost:3000/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
    
        if (response.ok) {
            // Show success message
            Toastify({
                text: "Subscription successful! A confirmation email has been sent.",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                className: "toastify toastify-success",
                stopOnFocus: true,
            }).showToast();
    
            document.getElementById('newsletter-form').reset();
        } else {
            // Show failure message
            Toastify({
                text: "Failed to subscribe. Please try again.",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                className: "toastify toastify-error",
                stopOnFocus: true,
            }).showToast();
        }
    } catch (error) {
        // Show network error message
        Toastify({
            text: "Error occurred. Please check your connection and try again.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            className: "toastify toastify-error",
            stopOnFocus: true,
        }).showToast();
        console.error('Error:', error);
    }
})