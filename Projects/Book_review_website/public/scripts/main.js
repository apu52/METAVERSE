// main.js or any common JavaScript file
console.log("loaded main.js");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { firebaseConfig } from "../config/firebaseConfig.js";
import { getAuth, browserSessionPersistence, setPersistence, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
console.log("configs done");
// Initialize Firebase
// const { firebaseConfig } = window; 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// setPersistence(auth, browserSessionPersistence);
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Firebase auth persistence set successfully.");
  })
  .catch((error) => {
    console.error("Error setting Firebase auth persistence:", error);
  });

//   const signinLink = document.getElementById('signin-link');
//   const profileDropdown = document.getElementById('profile-dropdown');
//   const signoutLink = document.getElementById('signout-link');
//   const editProfileLink = document.getElementById('editprofile-link');

document.addEventListener('DOMContentLoaded', async () => {
    
    console.log("content loaded");
    // Check if there's a signed-in user
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user fetched",user);
    if (user) {
        // console.log("user exists",signinLink);
        try {
            const signinLink = document.getElementById('signin-link');
            const profileDropdown = document.getElementById('profile-dropdown');
            
            console.log("inside try=",signinLink);
            signinLink.style.display = 'none';
            profileDropdown.style.display = 'block';
            console.log(user.uid);
                const displayName = user.displayName;
                console.log(displayName);
                const profileName = document.getElementById('profile-name');
                if (profileName) {
                    profileName.textContent = displayName;
                }
        } catch (error) {
            console.error('Error fetching user data from Firestore:', error);
        }
        
    
        // Handle UI elements based on user authentication state
        const profileLink = document.getElementById('profile-link');
        if (profileLink) {
            profileLink.style.display = 'inline-block';
        }
    
        const signinLink = document.getElementById('signin-link');
        if (signinLink) {
            signinLink.style.display = 'none';
        }
    } else {
        const signinLink = document.getElementById('signin-link');
        const profileDropdown = document.getElementById('profile-dropdown');
        // User is signed out
        signinLink.style.display = 'inline-block';
        profileDropdown.style.display = 'none';
    }
    const signoutLink = document.getElementById('signout-link');
    signoutLink.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await signOut(auth);
            localStorage.clear(); 
            window.location.href = "index.html"; // Redirect after sign out
        } catch (error) {
            console.error('Error signing out:', error);
        }
    });
    const editProfileLink = document.getElementById('editprofile-link');

    // Add event listener for edit profile link if needed
    editProfileLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Handle edit profile functionality here
    });
  });

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

}
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal('.text', { delay: 200, origin: 'top' })
sr.reveal('.form-container form', { delay: 800, origin: 'left' })
sr.reveal('.heading', { delay: 800, origin: 'top' })
sr.reveal('.ride-container .box', { delay: 600, origin: 'top' })
sr.reveal('.services-container .box', { delay: 600, origin: 'top' })
sr.reveal('.about-container .box', { delay: 600, origin: 'top' })
sr.reveal('.reviews-container ', { delay: 600, origin: 'top' })
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' })
