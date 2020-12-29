const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

document.addEventListener("mousemove", move);

function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 10,
});

gsap.from(".nav__item", {
  opacity: 0,
  duration: 1,
  delay: 1.3,
  y: 30,
  stagger: 0.2,
});

gsap.from(".home__title", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  y: 30
});

gsap.from(".home__description", {
  opacity: 0,
  duration: 1,
  delay: 1.7,
  y: 30
});

gsap.from(".about__info, .about__info-title", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 30
});

gsap.from(".about__contact, .gallery__title", {
  opacity: 0,
  duration: 1,
  delay: 1.7,
  y: 30
});

new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
