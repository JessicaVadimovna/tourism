<<<<<<< Updated upstream
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


=======

/* этот код помечает картинки, для удобства разработки */
let carousel=document.querySelectorAll("#list");
let i = 1;
for(let li of carousel) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 40; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector('#list');
let listElems = carousel.querySelectorAll('li');

let position = 200; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
>>>>>>> Stashed changes
