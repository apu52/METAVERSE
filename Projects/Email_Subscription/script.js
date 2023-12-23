const scriptURL = 'https://script.google.com/macros/s/AKfycbyQB_lU7Trm6WpV-TjnXV2rSPwIgDXrZDeFDfhVUAaDP_xkVTYxbaTGpWhlKibqSKk/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

/* 

google form - 
    https://docs.google.com/spreadsheets/d/12yT643Cp1kI5dtaNeNlDxL2t4l-jrA16Ge3APA_BLtg/edit#gid=0
 
Refered github repo -
    https://github.com/jamiewilson/form-to-google-sheets
 
 */