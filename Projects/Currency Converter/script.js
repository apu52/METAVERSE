const amount = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertButton = document.getElementById('convert');
const result = document.getElementById('result');

// Function to fetch currency exchange rates
async function fetchExchangeRates() {
    try {
        const response = await fetch('https://api.apilayer.com/exchangerates/latest');
        const data = await response.json();
        const rates = data.rates;
        const currencies = Object.keys(rates);

        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            toCurrency.appendChild(option2);
        });
    } catch (error) {
        console.error('Error fetching currency data:', error);
    }
}

// Perform the conversion
convertButton.addEventListener('click', async () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = parseFloat(amount.value);

    try {
        const response = await fetch(`https://api.apilayer.com/exchangerates/convert?from=${from}&to=${to}&amount=${amountValue}`);
        const data = await response.json();
        const convertedAmount = data.result;
        result.textContent = `${amountValue} ${from} is equal to ${convertedAmount} ${to}`;
    } catch (error) {
        console.error('Error performing conversion:', error);
        result.textContent = 'An error occurred. Please try again.';
    }
});

// Fetch currency data and populate the dropdowns
fetchExchangeRates();
