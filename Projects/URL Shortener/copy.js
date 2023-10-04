let newURL = document.getElementById("shorturl");
let copybutton = document.getElementById("copy");

copybutton.onclick = () =>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}