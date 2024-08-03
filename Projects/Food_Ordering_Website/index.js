const btn = document.getElementById('button');
const nav = document.getElementById('nav-ul');

btn.addEventListener('click', function () {
    nav.classList.toggle('toggle');
});

let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});


document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('button[data-item]');

    orderButtons.forEach(button => {
      button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        const price = parseFloat(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItemIndex = cart.findIndex(cartItem => cartItem.item === item);

        if (existingItemIndex >= 0) {
          cart[existingItemIndex].quantity += 1;
        } else {
          cart.push({ item, price, image, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${item} has been added to the cart.`);
      });
    });
  });


  // review page animation
const reviewLeft = document.querySelector(".reviewBtnleft");
const reviewRight = document.querySelector(".reviewBtnRight");
const allReviewCard = document.querySelectorAll(".reviewcard");
let reviewIndex = 0;
function animateReview(direction) {
  const previousIndex = reviewIndex;
  const nextIndex = (reviewIndex + direction + allReviewCard.length) % allReviewCard.length;
  gsap.to(allReviewCard[previousIndex], {
    left: direction > 0 ? "125%" : "-24%",
    duration: 0.9,
  });
  gsap.to(allReviewCard[nextIndex], {
    zIndex: 9,
    duration: 0.9,
  });
  gsap.to(allReviewCard[previousIndex], {
    left: "50%",
    zIndex: 1,
    delay: 0.9
  });
  reviewIndex = nextIndex;
}
gsap.to("#review", {
  backgroundColor: "antiquewhite",
  ease: "expo.inOut",
  duration: 4,
  scrollTrigger: {
    trigger: "#review",
    start: "top 20%",
    end: "top 25%",
    scrub: true,
  }
})
reviewRight.addEventListener("click", () => animateReview(1));
reviewLeft.addEventListener("click", () => animateReview(-1));