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


