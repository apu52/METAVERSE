// Initialize Swiper for the image slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop: true,
  });

// Responsive navigation menu handling
var menu = document.querySelector(".ri-menu-3-line");
var clo = document.querySelector(".ri-close-fill");
var nav = document.querySelector(".respo-nav");

// Show navigation menu on menu icon click
menu.addEventListener("click",function(){
      nav.style.top = "0%";
})

clo.addEventListener("click",function(){
  nav.style.top = "-120%";
})

var store = document.querySelector("#store");
var subMenu = document.querySelector(".submenu");

// Show submenu on mouseover
store.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

// Hide submenu on mouseleave
store.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

var mac = document.querySelector("#mac");
var subMenu = document.querySelector(".submenu");

mac.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

mac.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

var ipad = document.querySelector("#ipad");
var subMenu = document.querySelector(".submenu");

ipad.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

ipad.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

var iphone = document.querySelector("#iphone");
var subMenu = document.querySelector(".submenu");

iphone.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

iphone.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

var watch = document.querySelector("#watch");
var subMenu = document.querySelector(".submenu");

watch.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

watch.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

var airpods = document.querySelector("#airpods");
var subMenu = document.querySelector(".submenu");

airpods.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

airpods.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

var tv = document.querySelector("#tv");
var subMenu = document.querySelector(".submenu");

tv.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

tv.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

var entertainment = document.querySelector("#entertainment");
var subMenu = document.querySelector(".submenu");

entertainment.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

entertainment.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

var accessories = document.querySelector("#accessories");
var subMenu = document.querySelector(".submenu");

accessories.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

accessories.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

var support = document.querySelector("#support");
var subMenu = document.querySelector(".submenu");

support.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

support.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})
