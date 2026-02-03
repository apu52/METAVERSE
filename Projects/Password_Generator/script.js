// Character sets for password generation
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// DOM Elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lengthValueEl = document.getElementById('length-value');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const strengthLevelEl = document.getElementById('strength-level');
const strengthTextEl = document.getElementById('strength-text');
const notificationEl = document.getElementById('notification');

// Update length value display
lengthEl.addEventListener('input', (e) => {
    lengthValueEl.textContent = e.target.value;
});

// Generate password on button click
generateBtn.addEventListener('click', generatePassword);

// Copy to clipboard
copyBtn.addEventListener('click', copyToClipboard);

// Generate password on page load
window.addEventListener('load', generatePassword);

// Generate password function
function generatePassword() {
    const length = parseInt(lengthEl.value);
    const useUppercase = uppercaseEl.checked;
    const useLowercase = lowercaseEl.checked;
    const useNumbers = numbersEl.checked;
    const useSymbols = symbolsEl.checked;

    let charSet = '';
    let password = '';

    // Build character set based on selected options
    if (useUppercase) charSet += UPPERCASE;
    if (useLowercase) charSet += LOWERCASE;
    if (useNumbers) charSet += NUMBERS;
    if (useSymbols) charSet += SYMBOLS;

    // If no option is selected, default to lowercase
    if (charSet === '') {
        charSet = LOWERCASE;
        lowercaseEl.checked = true;
    }

    // Generate password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    // Ensure password meets criteria (at least one of each selected type)
    password = ensurePasswordCriteria(password, useUppercase, useLowercase, useNumbers, useSymbols);

    // Display password
    passwordEl.value = password;

    // Update strength indicator
    updateStrengthIndicator(password, useUppercase, useLowercase, useNumbers, useSymbols);

    // Add animation
    passwordEl.style.animation = 'none';
    setTimeout(() => {
        passwordEl.style.animation = 'slideIn 0.3s ease';
    }, 10);
}

// Ensure password contains at least one character of each selected type
function ensurePasswordCriteria(password, uppercase, lowercase, numbers, symbols) {
    let newPassword = password;
    const length = password.length;

    if (uppercase && !/[A-Z]/.test(newPassword)) {
        const pos = Math.floor(Math.random() * length);
        const char = UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
        newPassword = replaceAt(newPassword, pos, char);
    }

    if (lowercase && !/[a-z]/.test(newPassword)) {
        const pos = Math.floor(Math.random() * length);
        const char = LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)];
        newPassword = replaceAt(newPassword, pos, char);
    }

    if (numbers && !/[0-9]/.test(newPassword)) {
        const pos = Math.floor(Math.random() * length);
        const char = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
        newPassword = replaceAt(newPassword, pos, char);
    }

    if (symbols && !/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(newPassword)) {
        const pos = Math.floor(Math.random() * length);
        const char = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        newPassword = replaceAt(newPassword, pos, char);
    }

    return newPassword;
}

// Helper function to replace character at position
function replaceAt(str, index, char) {
    return str.substring(0, index) + char + str.substring(index + 1);
}

// Update strength indicator
function updateStrengthIndicator(password, uppercase, lowercase, numbers, symbols) {
    const length = password.length;
    let strength = 0;
    let strengthText = '';

    // Calculate strength score
    if (length >= 12) strength += 2;
    else if (length >= 8) strength += 1;

    if (uppercase) strength += 1;
    if (lowercase) strength += 1;
    if (numbers) strength += 1;
    if (symbols) strength += 2;

    // Determine strength level
    strengthLevelEl.classList.remove('strength-weak', 'strength-medium', 'strength-strong');
    
    if (strength <= 3) {
        strengthLevelEl.classList.add('strength-weak');
        strengthText = 'Weak';
        strengthTextEl.style.color = '#ef4444';
    } else if (strength <= 5) {
        strengthLevelEl.classList.add('strength-medium');
        strengthText = 'Medium';
        strengthTextEl.style.color = '#f59e0b';
    } else {
        strengthLevelEl.classList.add('strength-strong');
        strengthText = 'Strong';
        strengthTextEl.style.color = '#10b981';
    }

    strengthTextEl.textContent = strengthText;
}

// Copy to clipboard function
function copyToClipboard() {
    const password = passwordEl.value;
    
    if (!password) {
        return;
    }

    // Modern clipboard API
    navigator.clipboard.writeText(password).then(() => {
        showNotification();
    }).catch(() => {
        // Fallback for older browsers
        passwordEl.select();
        document.execCommand('copy');
        showNotification();
    });
}

// Show notification
function showNotification() {
    notificationEl.classList.add('show');
    setTimeout(() => {
        notificationEl.classList.remove('show');
    }, 2000);
}

// Add slide in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);
