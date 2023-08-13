const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  if (!quote.author) authorText.textContent = "UNKNOWN";
  else authorText.textContent = quote.author;

  if (quote.text.length > 65) quoteText.classList.add("long-quote");
  else quoteText.classList.remove("long-quote");

  quoteText.textContent = quote.text;
}
//  Event Listener
newQuoteBtn.addEventListener("click", newQuote);
newQuote();
