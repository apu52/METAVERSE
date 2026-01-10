// let popup = document.getElementById('pop-up');
// function openPopUp(){
//     popup.classList.add("open-pop");
// }
// function closePopUp(){
//     popup.classList.remove("open-pop");
// }
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

function openPopup() {
    popup.classList.add("active");
    overlay.classList.add("active");
    popup.setAttribute("aria-hidden", "false");
}

function closePopup() {
    popup.classList.remove("active");
    overlay.classList.remove("active");
    popup.setAttribute("aria-hidden", "true");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
});
