// Define the elements we'll be manipulating
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
// The button is no longer needed for functionality, but we keep the reference 
// to ensure the script doesn't throw an error if the element is present.
const newQuoteBtn = document.getElementById('new-quote-btn'); 

// Your custom array of quotes
const localQuotes = [
    { 
        "quote": "The best way to predict the future is to create it.", 
        "author": "Peter Drucker" 
    }, 
    { 
        "quote": "Strive not to be a success, but rather to be of value.", 
        "author": "Albert Einstein" 
    },
    { 
        "quote": "I have not failed. I've just found 10,000 ways that won't work.", 
        "author": "Thomas A. Edison" 
    },
    { 
        "quote": "You miss 100% of the shots you don't take.", 
        "author": "Wayne Gretzky" 
    }, 
    { 
        "quote": "Be yourself; everyone else is already taken.", 
        "author": "Oscar Wilde" 
    },
    { 
        "quote": "The early bird gets the worm, but the second mouse gets the cheese.", 
        "author": "Willie Nelson" 
    },
    { 
        "quote": "Life is what happens when you're busy making other plans.", 
        "author": "John Lennon" 
    },
    { 
        "quote": "I'm not saying I invented the turtleneck, but I was the first person to realize the potential of the turtleneck as a garment.", 
        "author": "Steve Jobs" 
    }
];

/**
 * Gets a random quote from the local array and updates the DOM.
 */
function getNewQuote() {
    // 1. Generate a random index
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    
    // 2. Select the quote object
    const quote = localQuotes[randomIndex];
    
    // 3. Update the elements
    const quoteContent = quote.quote;
    const authorName = quote.author || 'Unknown';

    if (quoteText && quoteAuthor) {
        quoteText.textContent = quoteContent;
        quoteAuthor.textContent = `- ${authorName}`;
    } else {
        console.error("Quote display elements not found.");
    }
}

// ⚠️ We no longer need newQuoteBtn.addEventListener('click', getNewQuote);

// 🔑 START THE AUTOMATIC ROTATION:
// Call getNewQuote() immediately to load the first quote.
getNewQuote(); 

// Use setInterval to call getNewQuote() every 5000 milliseconds (5 seconds).
// This is what makes the quotes rotate automatically.
setInterval(getNewQuote, 5000);