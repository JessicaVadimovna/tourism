// Modal Logic
document.addEventListener('DOMContentLoaded', function() {
  var loginModal = document.getElementById('login-modal');
  var signupModal = document.getElementById('signup-modal');
  var loginBtn = document.getElementById('login-btn');
  var signupBtn = document.getElementById('signup-btn');
  var closeLoginBtn = document.getElementById('close-login');
  var closeSignupBtn = document.getElementById('close-signup');

  loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
  });

  signupBtn.addEventListener('click', function() {
    signupModal.style.display = 'block';
  });

  closeLoginBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
  });

  closeSignupBtn.addEventListener('click', function() {
    signupModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
      loginModal.style.display = 'none';
    }
    if (event.target == signupModal) {
      signupModal.style.display = 'none';
    }
  });

  // Forgot Password Link
  var forgotPasswordLink = document.getElementById('forgot-password-link');
  forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    var email = prompt('Пожалуйста, введите ваш email:');
    if (email) {
      alert('Инструкции по сбросу пароля отправлены на ' + email);
    }
  });

  // Create Account Link
  var createAccountLink = document.getElementById('create-account-link');
  createAccountLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
  });

  // Login Form
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const userExists = false; // Здесь должна быть реальная проверка
    if (userExists) {
      alert('Пользователь с email ' + email + ' уже существует.');
    } else {
      alert('Пользователь с email ' + email + ' не найден. Зарегистрируйтесь.');
    }
  });

  // Remember Me Checkbox
  var rememberMeCheckbox = document.getElementById('remember-me');
  rememberMeCheckbox.addEventListener('change', function() {
    if (this.checked) {
      setCookie('rememberMe', 'true', 30);
    } else {
      setCookie('rememberMe', '', -1);
    }
  });
});

// Set Cookie function
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Ocean Carousel Text
const oceanTexts = [
  "Стамбул – это мост между Востоком и Западом, где каждый камень – страница истории.",
  "Стамбул – это путешествие во времени, где каждый уголок скрывает магию.",
  "Стамбул – это город, который охватывает вас своей невероятной энергией."
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

updateOceanText(); // Initialize text

// Search Form
function search() {
  const location = document.getElementById("ocean-location").value;
  const activity = document.getElementById("ocean-activity").value;
  const transport = document.getElementById("ocean-transportation").value;
  alert(`Поиск: Пол: ${location}, Тип отдыха: ${activity}, Транспорт: ${transport}`);
}


        // Guide Carousel (Infinite Scroll, No Numbers)
        const carousel = document.querySelector('#list');
        const items = carousel.querySelectorAll('li');
        const itemWidth = 280; // ширина элемента (240px фото + 20px + 20px отступы)
        const visibleCount = 3; // видимое количество элементов
        const totalItems = items.length;
        let currentIndex = 0;

        // Дублируем элементы для бесконечной прокрутки
        const cloneCount = Math.max(visibleCount, totalItems);
        for (let i = 0; i < cloneCount; i++) {
          const clone = items[i % totalItems].cloneNode(true);
          carousel.appendChild(clone);
        }

        const allItems = carousel.querySelectorAll('li');
        const totalWidth = itemWidth * allItems.length;
        carousel.style.width = `${totalWidth}px`;

        function updateCarousel() {
          const offset = -currentIndex * itemWidth;
          carousel.style.transform = `translateX(${offset}px)`;

          // Бесконечная прокрутка
          if (currentIndex >= totalItems) {
            currentIndex = 0;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(0)`;
            setTimeout(() => {
              carousel.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
          } else if (currentIndex < 0) {
            currentIndex = totalItems - 1;
            const newOffset = -currentIndex * itemWidth;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${newOffset}px)`;
            setTimeout(() => {
              carousel.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
          }
        }

        document.querySelector('.prev').onclick = function() {
          currentIndex--;
          updateCarousel();
        };

        document.querySelector('.next').onclick = function() {
          currentIndex++;
          updateCarousel();
        };

