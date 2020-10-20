const buttonBurger = document.querySelector(".hamburger");
const menu = document.querySelector(".fullscreen-menu");
const close = document.querySelector(".close");
const items = document.querySelectorAll(".navbar__link");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", e => {
    e.preventDefault();
    menu.classList.remove("active");
  });
}

buttonBurger.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.add("active");
});

close.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.remove("active");
});