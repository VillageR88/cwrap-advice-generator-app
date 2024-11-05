const quoteId = document.getElementById("quoteId");
const quoteText = document.getElementById("quoteText");
const submitButton = document.getElementById("submitButton");
const response = await fetch("https://api.adviceslip.com/advice");
const quote = await response.json();

/**
 * This function fetch new quote from https://api.adviceslip.com/advice
 * @returns void
 */
async function getQuote() {
	const response = await fetch("https://api.adviceslip.com/advice");
	const quote = await response.json();
	quoteId.textContent = `ADVICE #${quote.slip.id}`;
	quoteText.textContent = quote.slip.advice;
}

submitButton.addEventListener("click", () => {
	getQuote();
});
