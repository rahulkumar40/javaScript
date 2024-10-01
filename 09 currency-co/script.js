const API_URL = 'https://api.exchangerate-api.com/v4/latest/';  
const loader = document.getElementById('loader');
let exchangeRates = {};

document.getElementById('convert').addEventListener('click', convertCurrency);
document.getElementById('swapCurrencies').addEventListener('click', swapCurrencies);


async function fetchExchangeRates(baseCurrency) {
    try {
        loader.classList.remove('hidden');
        const response = await fetch(API_URL + baseCurrency);
        const data = await response.json();
        loader.classList.add('hidden');
        exchangeRates = data.rates;
        document.getElementById('lastUpdated').innerText = `Rates last updated: ${data.date}`;
    } catch (error) {
        alert('Error fetching exchange rates. Please try again later.');
        loader.classList.add('hidden');
    }
}


async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;


    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (!exchangeRates[fromCurrency]) {
        await fetchExchangeRates(fromCurrency);
    }

    const conversionRate = exchangeRates[toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}

function swapCurrencies() {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const tempCurrency = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCurrency;
    convertCurrency();
}
