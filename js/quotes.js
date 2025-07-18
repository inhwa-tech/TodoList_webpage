const quotes = [
    {
        quotes: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quotes: "Success is not final, failure is fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quotes: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
    },
    {
        quotes: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quotes: "What you do today can improve all your tomorrows.",
        author: "Ralph Marston",
    },
    {
        quotes: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        quotes: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama",
    },
    {
        quotes: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
    },
    {
        quotes: "Dream big and dare to fail.",
        author: "Norman Vaughan",
    },
    {
        quotes: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
