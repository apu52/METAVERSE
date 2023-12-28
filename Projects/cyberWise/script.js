
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

$(document).ready(function(){
    $('.faq-item .question').click(function(){
        $(this).next('.answer').toggleClass('show');
    });
});

function openGoogleDriveLink() {
    window.open('https://drive.google.com/file/d/1zuEX5nU5BYEEQ4JoJa0yP537cRnojcxS/view?usp=sharing', '_blank');
}
function openfacebook() {
    window.open('https://www.facebook.com/profile.php?id=100095593957170&mibextid=zLoPMf', '_blank');
}
function openinstagram() {
    window.open('https://www.instagram.com/may_moh_77/', '_blank');
}
function openlinkedin() {
    window.open('https://www.linkedin.com/in/mayank-mohapatra-697744267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
}
function opentwitter() {
    window.open('https://twitter.com/Mayank77007?t=mJpicaGLL5kqxALIdCCXfg&s=09', '_blank');
}
function opengithub() {
    window.open('https://github.com/Mayank77maruti', '_blank');
}

