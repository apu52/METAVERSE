const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("button");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    inputBox.innerHTML = ":";
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showData(){
    notesContainer.innerHTML = localStorage.getItem("notes"); 
}

showData();

notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function*(){
                updateStorage();
            }
        })
    }
})