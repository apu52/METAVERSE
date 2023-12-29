// select navigation buttons
const navButtons = document.querySelectorAll(".nav-button");

// reset the properties of the navigation buttons
const resetNavButtons = () => {
  navButtons.forEach((btn) => {
    btn.classList.remove("active");

    btn.style.fontWeight = 400;
    const img = btn.querySelector("img");
    if (img) {
      img.src = img.src.replace("-fill", "");
    }
  });
};

// make the selected button active
const setActiveNavButton = (button) => {
  button.classList.add("active");

  button.style.fontWeight = 700;
  const img = button.querySelector("img");
  if (img) {
    img.src = img.src.replace(".svg", "-fill.svg");
  }
};

// interaction with the buttons
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetNavButtons();
    setActiveNavButton(button);
  });
});
