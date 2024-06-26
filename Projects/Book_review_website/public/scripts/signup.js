import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { firebaseConfig } from "../config/firebaseConfig.js";
import { getAuth,browserSessionPersistence, setPersistence, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
setPersistence(auth, browserSessionPersistence);

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
        // Check if the user exists with this email
        const methods = await fetchSignInMethodsForEmail(auth, email);

        // If methods array contains 'password', user already exists
        if (methods.includes('password')) {
            errorMessage.textContent = "User already exists with this email. Redirecting to sign-in page...";
            setTimeout(() => {
                window.location.href = "signin.html"; // Redirect after 5 seconds
            }, 5000); // 5000 milliseconds = 5 seconds
            return;
        }

        // If user does not exist, proceed with creating a new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update user's profile with the provided display name
        await user.updateProfile({
            displayName: name
        });

        console.log('User signed up successfully:', user);
        signupForm.reset();
        window.location.href = "signin.html"; // Redirect to sign-in page
    } catch (error) {
        errorMessage.textContent = error.message;
        console.error('Error signing up:', error);
    }
});

googleSignupButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Hide the regular signup form
        signupForm.style.display = 'none';

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
        document.getElementById('additional-info-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;

            // Store additional user info in Firestore
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                username: username
            });
            console.log('User information stored in Firestore');
            // Redirect or update UI as needed after signup completion
            window.location.href = "index.html"; 
        });
    } catch (error) {
        console.error('Error during Google Sign-Up:', error);
        // Handle errors here
    }
});