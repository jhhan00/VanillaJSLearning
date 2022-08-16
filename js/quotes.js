const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "All you need in this life is ignorance and confidence; then success is sure.",
        author: "Mark Twain"
    },
    {
        quote: "I don't go by the rule book… I lead from the heart, not the head.",
        author: "Princess Diana"
    },
    {
        quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
        author: "Bruce Lee"
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs"
    },
    {
        quote: "Life is what happens when you're busy making other plans",
        author: "John Lennon"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuuote.quote;
author.innerText = todayQuuote.author;