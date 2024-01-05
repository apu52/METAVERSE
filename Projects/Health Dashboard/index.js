const toggle = document.getElementById('toggle');
toggle.addEventListener('input', e => {
const isChecked = e.target.checked;

if (isChecked) {
    document.body.classList.add('dark-theme');
    
} else {
    document.body.classList.remove('dark-theme');
    
}
});
