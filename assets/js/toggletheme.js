document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(currentTheme);
    themeToggleButton.checked = currentTheme === 'dark'; // Set checkbox state

  
    themeToggleButton.addEventListener('change', () => {
        if (themeToggleButton.checked) {
            body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
