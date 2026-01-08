// Dynamic Copyright Year Updater
// Automatically updates copyright year to current year across all pages

document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with class 'copyright'
    const copyrightElements = document.querySelectorAll('.copyright');
    
    // Get current year
    const currentYear = new Date().getFullYear();
    
    // Update each copyright element
    copyrightElements.forEach(element => {
        // Replace any year (4 digits) with current year
        const text = element.textContent || element.innerText;
        const updatedText = text.replace(/\d{4}/, currentYear);
        element.textContent = updatedText;
    });
    
    // Also handle copyright elements with specific IDs
    const copyrightById = document.getElementById('copyright-year');
    if (copyrightById) {
        copyrightById.textContent = currentYear;
    }
    
    console.log(`Copyright year updated to ${currentYear}`);
});
