function switchMode() {
  const body = document.body;
  const switchMode = document.querySelector(".toggle-mode");
  const changeTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const icon = document.querySelector(".fa-moon");
  const textMode = document.querySelector(".mode-text");

  // selecting the stored theme from the local storage
  let theme = localStorage.getItem("theme");

  // function to reuse the dark mode and light mode themes
  const darkMode = () => {
    textMode.textContent = "Light Mode";
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
    theme = "dark";
  };
  const lightMode = () => {
    textMode.innerText = "Dark Mode";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    theme = "light";
  };
  // toggle dark mode on dom content loaded
  if (changeTheme.matches) {
    // if (theme === "dark") {
    body.classList.toggle("dark-mode");
    darkMode();
    // } else {
    //   lightMode();
    //   console.log(theme);
    //   body.classList.toggle("light-mode");
    // }
  } else {
    // if (theme === "light") {
    lightMode();
    body.classList.toggle("light-mode");
    // } else {
    //   darkMode();
    //   console.log(theme);
    //   body.classList.toggle("dark-mode");
    // }
  }

  // toggling between dark and light mode if button is clicked
  switchMode.addEventListener("click", (event) => {
    // stop the page from reloading upon submission
    event.preventDefault();
    // logic for the dark mode
    if (changeTheme.matches) {
      if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        darkMode();
      } else {
        body.classList.toggle("light-mode");
        lightMode();
      }

      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
      }
    }

    // logic for the light theme
    else {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        lightMode();
      } else {
        body.classList.toggle("dark-mode");
        darkMode();
      }

      if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
      }
    }
    // store theme after user clicks
    theme = localStorage.setItem("theme", theme);
  });
  // end of the switch functionality
}
export default switchMode;
