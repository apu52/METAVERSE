const btn = document.getElementById('button');
const nav = document.getElementById('nav-ul');

btn.addEventListener('click', function () {
    nav.classList.toggle('toggle');
});