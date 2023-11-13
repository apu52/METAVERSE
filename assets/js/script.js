'use strict';

// Pagination in project section
// Variable for Active Page
let pageActive = 0;

const previousPageTile = document.getElementById('prev-page-tile');
const nextPageTile = document.getElementById('next-page-tile');

function getPageNumbers() {
  const pagination_section = document.querySelector('.pagination_section');
  const project = document.querySelectorAll('.project-item');
  pagination_section.innerHTML = "";
  for (let i = 0; i < project.length; i+=20){
    const child = document.createElement('div');
    if (i == 0){
      child.innerHTML = `<div id="first-page-tile" class="page-tile active">${i/20 + 1}</div>`
    } else {
      child.innerHTML = `<div class="page-tile">${i/20 + 1}</div>`
    }
    pagination_section.appendChild(child);
  }

  pageActive = 0;
  previousPageTile.setAttribute('disabled', true);
  for (let i = 20; i < project.length; i++) {
    project[i].style.display = "none";
  }
}


function getProjectsInPage() {
  const pageTile = document.querySelectorAll('.page-tile');
  const project = document.querySelectorAll('.project-item');
  const clickSound = document.getElementById("clickSound");

  for (let i = 0; i < project.length; i++){
    project[i].addEventListener('click', () => {
      clickSound.play();
    });
  }

  pageTile.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });
      pageTile[pageActive].classList.remove('active');
      pageActive = index;
      elem.classList.add('active');
      const page = Number(elem.textContent)-1;
      if (page > 0){
        previousPageTile.removeAttribute('disabled');
      } else {
        previousPageTile.setAttribute('disabled', true);
      }
      
      if (index == pageTile.length-1){
        nextPageTile.setAttribute('disabled', true);
      } else {
        nextPageTile.removeAttribute('disabled');
      }
      for (let i = 0; i < project.length; i++){
        if (i >= page*20 && i < page*20 + 20){
          project[i].style.display = "block";
        } else {
          project[i].style.display = "none";
        }
      }
    })
  });
}


function goToNextPage() {
  const pageTile = document.querySelectorAll('.page-tile');
  pageTile[pageActive].classList.remove('active');
  pageActive++;
  pageTile[pageActive].click();
  pageTile[pageActive].classList.add('active');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


function goToPreviousPage() {
  const pageTile = document.querySelectorAll('.page-tile');
  pageTile[pageActive].classList.remove('active');
  pageActive--;
  pageTile[pageActive].click();
  pageTile[pageActive].classList.add('active');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}




// Light-Dark
function toggleTheme() {
  var slider = document.getElementById("themeToggle");
  if (slider.checked) {
    disableDarkTheme();
  } else {
    enableDarkTheme();
  }
}

function enableDarkTheme() {
  var elements = document.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (
      element.tagName !== 'BODY' &&
      !element.classList.contains('ignore-dark-theme') &&
      !element.classList.contains('footer') &&
      !element.classList.contains('project-title') &&
      !element.classList.contains('search-container') &&
      !element.classList.contains('project-img')
    ) {
      element.classList.add('dark-theme');
    }
  }

  // Adding specific background color for the footer
  var footer = document.querySelector('footer');
  if (footer) {
    footer.classList.add('dark-theme');
  }
}


function disableDarkTheme() {
  var elements = document.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (
      element.tagName !== 'BODY' &&
      !element.classList.contains('ignore-dark-theme') &&
      !element.classList.contains('footer') &&
      !element.classList.contains('project-title') &&
      !element.classList.contains('search-container') &&
      !element.classList.contains('project-img')
    ) {
      element.classList.remove('dark-theme');
    }
  }
}


function search() {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  let searchelement = document.getElementsByClassName('project-item  active');
  for (let i = 0; i < searchelement.length; i++) { 
      if (!searchelement[i].innerHTML.toLowerCase().includes(input)) 
      {
          searchelement[i].style.display="none";
      }
      else 
      {
          searchelement[i].style.display="block";                 
      }
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}



