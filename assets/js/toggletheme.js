document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Get the saved theme from localStorage or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the current theme class to the body
    body.classList.add(currentTheme);

    // Set the initial state of the toggle button based on the current theme
    themeToggleButton.checked = currentTheme === 'dark';

    // Add an event listener to handle theme changes
    themeToggleButton.addEventListener('change', () => {
        if (themeToggleButton.checked) {
            // Switch to dark theme
            body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light theme
            body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
