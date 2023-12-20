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
    .then((data) => {
        const amountX = amount.value;
        const to = toCurrency.value;
        const rate = data.rates[to];
        const resultX = `${amountX * rate} ${to}`;

        resultTop.innerHTML = `${amountX} ${from} =`
        result.innerHTML = `${roundOff(parseFloat(resultX), 2)} ${to}`;
        resultBottom.innerHTML = `1 ${from} = ${roundOff(parseFloat(rate), 2)} ${to}`;
        result.parentNode.classList.add("slideDown");
        result.parentNode.classList.remove("d-none");
    });
};

const roundOff = (num, decimals) => {
    const x = Math.pow(10, decimals);
    return Math.round(num * x) / x;
};
const convert = () => {
    result.parentNode.classList.remove("slideDown");
    result.parentNode.classList.add("d-none");
    const from = fromCurrency.value
    convertCurrency(from);
};

convertBtn.addEventListener('click', () => {
    convert();
});
