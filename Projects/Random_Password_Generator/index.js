// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

// Object containing functions for generating random characters
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Event listener for the clipboard button
clipboard.addEventListener('click', () => {
    // Create a temporary textarea element to copy the password to the clipboard
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    // If there is no password, do nothing
    if (!password) { return; }

    // Set the textarea value to the password and append it to the body
    textarea.value = password;
    document.body.appendChild(textarea);

    // Copy the password to the clipboard using the Clipboard API
    if (!navigator.clipboard) {
        // Fallback for browsers that do not support the Clipboard API
    } else {
        navigator.clipboard.writeText(textarea.value)
            .then(() => {
                alert("Password copied to clipboard");
            })
            .catch(() => {
                alert("Error copying password");
            });
    }

    // Remove the temporary textarea
    document.body.removeChild(textarea);
});

// Event listener for the "Generate Password" button
generateEl.addEventListener('click', () => {
    // Get the selected options for password generation
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    // Generate and display the password
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Function to generate a password based on selected options
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    // If no types are selected, return an empty string
    if (typesCount === 0) {
        return '';
    }

    // Loop to generate the password with selected character types
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    // Trim the generated password to the desired length
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

// Functions for generating random characters
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Social panel toggle functionality
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    // Toggle the visibility of the social panel
    social_panel_container.classList.toggle('visible');
});

close_btn.addEventListener('click', () => {
    // Close the social panel
    social_panel_container.classList.remove('visible');
});
