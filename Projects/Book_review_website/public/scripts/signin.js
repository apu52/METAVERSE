// console.log('signin.js loaded');
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { firebaseConfig } from "../config/firebaseConfig.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,browserSessionPersistence, setPersistence } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// console.log('configs loaded');
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// setPersistence(auth, browserSessionPersistence);
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Firebase auth persistence set successfully.");
  })
  .catch((error) => {
    console.error("Error setting Firebase auth persistence:", error);
  });

const signinForm = document.getElementById("signin-form");
const errorMessage = document.getElementById("error-message");

// const signupButton = document.getElementById('signup-btn');

// signupButton.addEventListener('click', function() {
//     // Redirect to the signup page
//     // e.preventDefault();
//     console.log('Sign up button clicked');
//     window.location.href = '/signup.html';
// });
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    const signupButton = document.getElementById('signup-btn');
    console.log('Signup button:', signupButton);
    
    if (signupButton) {
      signupButton.addEventListener('click', function() {
        console.log('Sign up button clicked');
        window.location.href = '/signup.html';
      });
      console.log('Event listener attached');
    } else {
      console.error('Signup button not found');
    }
  });

signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        signinForm.reset();
        localStorage.setItem('user', JSON.stringify(userCredential.user));
        window.location.href = "../index.html";
        // const unsubscribe = onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //       // User is signed in, redirect to index.html
        //       window.location.href = "../index.html";
        //       unsubscribe(); // Stop listening for further changes
        //     }
        //   });
    } catch (error) {
        console.error(error.message);
        errorMessage.textContent = error.message;
    }
});

const googleSigninButton = document.getElementById("google-signin");

googleSigninButton.addEventListener("click", async () => {
    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        localStorage.setItem('user', JSON.stringify(userCredential.user));
        // const unsubscribe = onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //       // User is signed in, redirect to index.html
        //       window.location.href = "../index.html";
        //       unsubscribe(); // Stop listening for further changes
        //     }
        //   });
        window.location.href = "../index.html";
    } catch (error) {
        console.error(error.message);
        errorMessage.textContent = error.message;
    }
});

// Check if user is signed in on page load
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, show profile icon
        document.getElementById('signin-link').style.display = 'none';
        document.getElementById('profile-link').style.display = 'inline-block';
    } else {
        // No user is signed in, show sign-in button
        document.getElementById('signin-link').style.display = 'inline-block';
        document.getElementById('profile-link').style.display = 'none';
    }
});
