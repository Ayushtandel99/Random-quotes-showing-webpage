// Array of quotes
const quotes = [
    {
        text: "being alone is more painfull than getting hurt.",
        author: "Monkey D Luffy"
    },
    {
        text: "I rather die than give up.",
        author: "Roronova Zoro"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }, 
  
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    }
];

// Get random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display new quote
function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById("quote-text").textContent = quote.text;
    document.getElementById("quote-author").textContent = `- ${quote.author}`;
}

// Event listener for new quote button
document.getElementById("new-quote-btn").addEventListener("click", displayQuote);

// Display initial quote
displayQuote();
