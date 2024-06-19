"use strict";

// Pagination in project section
// Variable for Active Page
let pageActive = 0;

const previousPageTile = document.getElementById("prev-page-tile");
const nextPageTile = document.getElementById("next-page-tile");

function getPageNumbers() {
  const pagination_section = document.querySelector(".pagination_section");
  const project = document.querySelectorAll(".project-item");
  pagination_section.innerHTML = "";
  for (let i = 0; i < project.length; i += 20) {
    const child = document.createElement("div");
    if (i == 0) {
      child.innerHTML = `<div id="first-page-tile" class="page-tile active">${
        i / 20 + 1
      }</div>`;
    } else {
      child.innerHTML = `<div class="page-tile">${i / 20 + 1}</div>`;
    }
    pagination_section.appendChild(child);
  }

  pageActive = 0;
  previousPageTile.setAttribute("disabled", true);
  for (let i = 20; i < project.length; i++) {
    project[i].style.display = "none";
  }
}

function getProjectsInPage() {
  const pageTile = document.querySelectorAll(".page-tile");
  const project = document.querySelectorAll(".project-item");
  const clickSound = document.getElementById("clickSound");

  for (let i = 0; i < project.length; i++) {
    project[i].addEventListener("click", () => {
      clickSound.play();
    });
  }

  pageTile.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      pageTile[pageActive].classList.remove("active");
      pageActive = index;
      elem.classList.add("active");
      const page = Number(elem.textContent) - 1;
      if (page > 0) {
        previousPageTile.removeAttribute("disabled");
      } else {
        previousPageTile.setAttribute("disabled", true);
      }

      if (index == pageTile.length - 1) {
        nextPageTile.setAttribute("disabled", true);
      } else {
        nextPageTile.removeAttribute("disabled");
      }
      for (let i = 0; i < project.length; i++) {
        if (i >= page * 20 && i < page * 20 + 20) {
          project[i].style.display = "block";
        } else {
          project[i].style.display = "none";
        }
      }
    });
  });
}

function goToNextPage() {
  const pageTile = document.querySelectorAll(".page-tile");
  pageTile[pageActive].classList.remove("active");
  pageActive++;
  pageTile[pageActive].click();
  pageTile[pageActive].classList.add("active");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function goToPreviousPage() {
  const pageTile = document.querySelectorAll(".page-tile");
  pageTile[pageActive].classList.remove("active");
  pageActive--;
  pageTile[pageActive].click();
  pageTile[pageActive].classList.add("active");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Light-Dark
function toggleTheme() {
  var slider = document.getElementById("themeToggle");
  if (slider.checked) {
    disableDarkTheme();
    //saving the light theme locally.
    localStorage.setItem("theme", "light");
  } else {
    enableDarkTheme();
    //saving the dark theme locally.
    localStorage.setItem("theme", "dark");
  }
}

function enableDarkTheme() {
  const navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.backgroundImage = "linear-gradient(to right, #23abd4, #23abd4 50%, #000000 50%)";
  }
  var elements = document.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (
      element.tagName !== "BODY" &&
      !element.classList.contains("ignore-dark-theme") &&
      !element.classList.contains("footer") &&
      !element.classList.contains("project-title") &&
      !element.classList.contains("search-container") &&
      !element.classList.contains("project-img")
    ) {
      element.classList.add("dark-theme");
    }
  }

  // Adding specific background color for the footer
  var footer = document.querySelector("footer");
  if (footer) {
    footer.classList.add("dark-theme");
  }
}

function disableDarkTheme() {
  const navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.backgroundImage = "linear-gradient(to right, #23abd4, #23abd4 50%, #fff 50%)";
  }
  var elements = document.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (
      element.tagName !== "BODY" &&
      !element.classList.contains("ignore-dark-theme") &&
      !element.classList.contains("footer") &&
      !element.classList.contains("project-title") &&
      !element.classList.contains("search-container") &&
      !element.classList.contains("project-img")
    ) {
      element.classList.remove("dark-theme");
    }
  }
}

//On page load updating the theme toggle
document.addEventListener("DOMContentLoaded", (event) => {
  var savedTheme = localStorage.getItem("theme"); // Retrieve the theme state from local storage
  var slider = document.getElementById("themeToggle");
  if (savedTheme === "dark") {
    slider.checked = false; // Set the checkbox state
    enableDarkTheme(); // Apply the dark theme
  } else {
    slider.checked = true; // Set the checkbox state
    disableDarkTheme(); // Apply the light theme
  }
});

function search() {
  let input = document.getElementById("searchbar").value.toLowerCase();
  let hasResults = false; // Initialize as false
  let searchelement = document.getElementsByClassName("project-item active");

  for (let i = 0; i < searchelement.length; i++) {
    if (searchelement[i].innerHTML.toLowerCase().includes(input)) {
      searchelement[i].style.display = "block";
      hasResults = true; // Set to true if a match is found
    } else {
      searchelement[i].style.display = "none";
    }
  }
  console.log(hasResults, "Hello world");

  const noResults = document.getElementById("noResults");
  if (!hasResults) {
    noResults.style.display = "block";
    noResults.style.color = "red";
  } else {
    noResults.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
