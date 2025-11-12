// Get references to elements
const bodyElement = document.body;

// Array of light, pleasant background colors
const backgroundColors = [
    '#e0f7fa', // Light Cyan
    '#fce4ec', // Light Pink
    '#e8f5e9', // Light Green
    '#f3e5f5', // Light Purple
    '#fff3e0', // Light Orange
    '#e1f5fe', // Light Blue
    '#f9fbe7'  // Light Yellow
];

function getRandomColor() {
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
}

// Function to handle the random color change
function updateBackgroundColor() {
    bodyElement.style.backgroundColor = getRandomColor();
}

// 1. Hook into the existing New Quote Button click event
const newQuoteBtn = document.getElementById('new-quote-btn');

// 2. When the button is clicked, change the background color
newQuoteBtn.addEventListener('click', updateBackgroundColor);