const buttonBurger = document.querySelector(".hamburger");
const menu = document.querySelector(".fullscreen-menu");
const close = document.querySelector(".close");

buttonBurger.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.add("active");
});

close.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.remove("active");
});