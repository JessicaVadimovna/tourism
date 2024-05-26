function search() {
    const travelType = document.getElementById('travel-type').value;
    const gender = document.getElementById('gender').value;

    alert(`Searching for ${travelType} trips with a ${gender} guide.`);
}

//Header
// Adding event listeners to show and hide the modals when buttons are clicked and when clicking outside the modal content

document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    var loginModal = document.getElementById('login-modal');
    var signupModal = document.getElementById('signup-modal');

    // Get open modal buttons
    var loginBtn = document.getElementById('login-btn');
    var signupBtn = document.getElementById('signup-btn');

    // Get close buttons
    var closeLoginBtn = document.getElementById('close-login');
    var closeSignupBtn = document.getElementById('close-signup');

    // Listen for open click
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    signupBtn.addEventListener('click', function() {
        signupModal.style.display = 'block';
    });

    // Listen for close click
    closeLoginBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    closeSignupBtn.addEventListener('click', function() {
        signupModal.style.display = 'none';
    });

    // Listen for outside click
    window.addEventListener('click', function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == signupModal) {
            signupModal.style.display = 'none';
        }
    });
});

// Forgot Password Link
var forgotPasswordLink = document.getElementById('forgot-password-link');
forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    var email = prompt('Please enter your email address:');
    if (email) {
        alert('An email with instructions to reset your password has been sent to ' + email);
    }
});

// Login Form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    
    const userExists = false;
    if (userExists) {
        alert('User with email ' + email + ' already exists.');
    } else {
        alert('User with email ' + email + ' does not exist. You can proceed to sign up.');
    
    }
});