const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});


const experienceSwiper = new Swiper(".experience-swiper", {
  spaceBetween: 10,
  slidesPerView: 3.3,
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3.3,
      spaceBetween: 10,
    }
  }
});
const aderSwiper = new Swiper(".ader-swiper", {
  spaceBetween: 10,
  slidesPerView: 1.1
});
