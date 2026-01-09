// user.js
import { auth, googleProvider } from './firebase-config.js';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

// Get DOM elements
const googleSignInBtn = document.getElementById('google-signin-btn');
const signOutBtn = document.getElementById('signout-btn');
const userInfo = document.getElementById('user-info');

// Google Sign In
googleSignInBtn.addEventListener('click', async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        console.log('User signed in:', user);
    } catch (error) {
        console.error('Error signing in:', error.code, error.message);
        alert('Error signing in: ' + error.message);
    }
});

// Sign Out
signOutBtn.addEventListener('click', async () => {
    try {
        await signOut(auth);
        console.log('User signed out');
    } catch (error) {
        console.error('Error signing out:', error);
    }
});

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        googleSignInBtn.style.display = 'none';
        signOutBtn.style.display = 'block';
        userInfo.style.display = 'block';
        userInfo.innerHTML = `
            <h3>Welcome, ${user.displayName}</h3>
            <p>Email: ${user.email}</p>
            <img src="${user.photoURL}" alt="Profile" style="width:100px;border-radius:50%;">
        `;
    } else {
        // User is signed out
        googleSignInBtn.style.display = 'block';
        signOutBtn.style.display = 'none';
        userInfo.style.display = 'none';
    }
});