async function fetchQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    const quoteElement = document.getElementById('quote-text');
    quoteElement.textContent = `${data.content} - ${data.author}`;
  } catch (error) {
    console.error('There was a problem fetching the quote:', error);
  }
}