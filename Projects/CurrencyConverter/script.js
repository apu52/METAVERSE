const amount = document.querySelector('#amount');
const fromCurrency = document.querySelector('#selected-from-ticker');
const toCurrency = document.querySelector('#selected-to-ticker');
const resultTop = document.querySelector('#result-top');
const result = document.querySelector('#result-main');
const resultBottom = document.querySelector('#result-bottom');
const convertBtn = document.querySelector('#convert');

const convertCurrency = (from) => {
    fetch(`https://open.er-api.com/v6/latest/${from}`)
    .then(response => response.json())
    .catch(err => console.error(err))