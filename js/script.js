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

// Create Account Link
var createAccountLink = document.getElementById('create-account-link');
createAccountLink.addEventListener('click', function(event) {
  event.preventDefault();
  // Show the signup modal
  document.getElementById('signup-modal').style.display = 'block';
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


// Remember Me Checkbox
var rememberMeCheckbox = document.getElementById('remember-me');
rememberMeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    // Set a cookie to remember the user
    setCookie('rememberMe', 'true', 30); // expires in 30 days
  } else {
    // Remove the cookie
    setCookie('rememberMe', '', -1);
  }
});

// Set Cookie function
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



const oceanTexts = [
    "Стамбул – это мост между Востоком и Западом, где каждый камень, каждая улица – это страница истории, которая ждет своего исследователя.",
    "Стамбул – это путешествие во времени, где каждый уголок скрывает свою собственную историю и магию.",
    "Стамбул – это город, который охватывает вас своей невероятной энергией и заставляет вас влюбиться в него с первого взгляда."
];

let currentOceanIndex = 0;

function updateOceanText() {
    document.getElementById('ocean-carousel-text').textContent = oceanTexts[currentOceanIndex];
}

function prevOceanText() {
    currentOceanIndex = (currentOceanIndex - 1 + oceanTexts.length) % oceanTexts.length;
    updateOceanText();
}

function nextOceanText() {
    currentOceanIndex = (currentOceanIndex + 1) % oceanTexts.length;
    updateOceanText();
}

// Initialize with the first text
updateOceanText();


/* этот код помечает картинки, для удобства разработки */
let carousel = document.querySelector("#list"); 
let i = 1; 
for (let li of carousel.children) { 
  li.style.position = 'relative'; 
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`); 
  i++; 
} 
 
/* конфигурация */ 
let width = 40; // ширина картинки 
let count = 3; // видимое количество изображений 
 
let list = carousel; 
let listElems = carousel.children; 
 
let position = 200; // положение ленты прокрутки 
 
carousel.previousElementSibling.querySelector('.prev').onclick = function() { 
  // сдвиг влево 
  position += width * count; 
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент 
  position = Math.min(position, 0) 
  list.style.marginLeft = position + 'px'; 
}; 
 
carousel.previousElementSibling.querySelector('.next').onclick = function() { 
  // сдвиг вправо 
  position -= width * count; 
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент 
  position = Math.max(position, -width * (listElems.length - count)); 
  list.style.marginLeft = position + 'px'; 
};
