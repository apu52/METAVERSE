import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { firebaseConfig } from "../config/firebaseConfig.js";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


// Initialize Firebase
var app = initializeApp(firebaseConfig);
var auth = getAuth(app);

const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');
const googleSignupButton = document.getElementById('google-signup');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        await user.updateProfile({
            displayName: name
        });
        await user.reload();
        console.log(user); // To check if user info is updated
        signupForm.reset();
        window.location.href = "signin.html";
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});

document.getElementById('google-signup').addEventListener('click', function(e) {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            // Hide the regular signup form
            document.getElementById('signup-form').style.display = 'none';
            
            // Show a new form or div for additional info
            const additionalInfoDiv = document.createElement('div');
            additionalInfoDiv.innerHTML = `
                <h3>Welcome ${user.displayName}!</h3>
                <p>We just need a bit more information:</p>
                <form id="additional-info-form">
                    <label for="username">Choose a username:</label>
                    <input type="text" id="username" required>
                    <button type="submit">Complete Signup</button>
                </form>
            `;
            document.querySelector('.container').appendChild(additionalInfoDiv);

            // Handle the additional info submission
            document.getElementById('additional-info-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const username = document.getElementById('username').value;
                // Here you would typically send this additional info to your server
                console.log('Signup complete with username:', username);
                // Redirect or update UI as needed
            });
        }).catch((error) => {
            console.error('Error during Google Sign-Up:', error);
            // Handle errors here
        });
});
