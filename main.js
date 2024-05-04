// JS

const header = document.querySelector("header");
const navIcons = document.querySelector(".nav-icons");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
  navIcons.classList.toggle("sticky", window.scrollY > 80);
});
