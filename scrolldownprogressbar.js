document.addEventListener("DOMContentLoaded", function () {
   let progressBar = document.querySelector(".progress-bar");
 
   function updateProgressBar() {
     let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     let scrollTop = window.scrollY || document.documentElement.scrollTop;
     let progress = (scrollTop / documentHeight) * 100;
     progressBar.style.width = progress + "%";
   }
 
   window.addEventListener("scroll", updateProgressBar);
   window.addEventListener("resize", updateProgressBar); // To handle changes in document height due to resizing
   updateProgressBar(); // Initial call to set the progress bar on page load
 });
 