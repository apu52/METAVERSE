// Implementing the landing page animation
function startAnimation() {
  const heading = document.querySelector(".hero .main-content h1");
  const buttonContainer = document.querySelector(".hero .buttons-container");

  const init_value = heading.innerHTML;
  const headingSplit = new SplitType(heading);

  console.log(headingSplit);

  for (let i = 0; i < headingSplit.chars.length; i++) {
    let char = headingSplit.chars[i];
    char.style.setProperty("animation-delay", i * 0.05 + "s");
  }

  // after whole animation restore initial content so that newly formed characters don't interfere with other things like resizing
  setTimeout(() => {
    heading.innerHTML = init_value;
    heading.style.lineHeight = "1.72em";

    buttonContainer.style.opacity = "1";
    buttonContainer.style.transform = "none";

    let backgroundCircles = document.querySelectorAll(".background .circle");
    for (let circle of backgroundCircles) {
      circle.style.scale = "1";
    }
  }, headingSplit.chars.length * 0.05 * 1000 + 500);
}
