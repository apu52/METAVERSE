'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);
// faq
document.addEventListener("DOMContentLoaded", function() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {
      question.addEventListener("click", function() {
          // Toggle the 'active' class on the clicked question
          this.classList.toggle("active");

          // Get the corresponding answer element
          const answer = this.nextElementSibling;

          // Toggle the display of the answer
          if (answer.style.maxHeight) {
              answer.style.maxHeight = null;
          } else {
              // Close all other answers before opening the clicked one
              faqQuestions.forEach(item => {
                  if (item !== this) {
                      item.classList.remove("active");
                      item.nextElementSibling.style.maxHeight = null;
                  }
              });
              answer.style.maxHeight = answer.scrollHeight + "px";
          }
      });
  });
});
