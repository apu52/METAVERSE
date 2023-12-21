const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl ="https://api.quotable.io/random";
const toggle = document.getElementById('toggle');
const body = document.body;
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML= data.author;
    author.style.fontSize = '18px'
    author.style.fontWeight = '500';
}
getquote (apiUrl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML,"Tweet Window","width=600,height=300");
}


toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
        
    } else {
        body.classList.remove('dark-theme');
        
    }
});
