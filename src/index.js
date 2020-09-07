import './main.css';

// Returns a random integer between min (included) and max (excluded)
function getRandomInteger() {
    const min = 0;
    const max = 4;
    return Math.floor(Math.random() * (max - min) + min);
}

// DOM elements
const result1 = document.getElementById('result-1');
const result2 = document.getElementById('result-2');
const result3 = document.getElementById('result-3');
const result4 = document.getElementById('result-4');

const lyricsGroup1 = document.getElementById('lyrics-group-1');
const lyricsGroup2 = document.getElementById('lyrics-group-2');
const lyricsGroup3 = document.getElementById('lyrics-group-3');
const lyricsGroup4 = document.getElementById('lyrics-group-4');

const randomButton = document.getElementById('click-random');

// Listeners
randomButton.addEventListener('click', function() {

    const randomIndex1 = getRandomInteger();
    // We need to change the selected index first to change the displayed selected option
    lyricsGroup1.selectedIndex = randomIndex1;
    result1.innerText = lyricsGroup1.options[lyricsGroup1.selectedIndex].innerText;

    const randomIndex2 = getRandomInteger();
    lyricsGroup2.selectedIndex = randomIndex2;
    result2.innerText = lyricsGroup2.options[lyricsGroup2.selectedIndex].innerText;

    const randomIndex3 = getRandomInteger();
    lyricsGroup3.selectedIndex = randomIndex3;
    result3.innerText = lyricsGroup3.options[lyricsGroup3.selectedIndex].innerText;

    const randomIndex4 = getRandomInteger();
    lyricsGroup4.selectedIndex = randomIndex4;
    result4.innerText = lyricsGroup4.options[lyricsGroup4.selectedIndex].innerText;
});

lyricsGroup1.addEventListener('change', function() {
    result1.innerText = lyricsGroup1.options[lyricsGroup1.selectedIndex].innerText;
});

lyricsGroup2.addEventListener('change', function() {
    result2.innerText = lyricsGroup2.options[lyricsGroup2.selectedIndex].innerText;
});

lyricsGroup3.addEventListener('change', function() {
    result3.innerText = lyricsGroup3.options[lyricsGroup3.selectedIndex].innerText;
});

lyricsGroup4.addEventListener('change', function() {
    result4.innerText = lyricsGroup4.options[lyricsGroup4.selectedIndex].innerText;
});
