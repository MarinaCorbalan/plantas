const header = document.querySelector("header");
const navIcons = document.querySelector(".nav-icons");
const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
  navIcons.classList.toggle("sticky", window.scrollY > 80);
});

menu.addEventListener("click", () => {
  navList.classList.toggle("open");
});

window.addEventListener("resize", () => {
  let windowWidth = window.innerWidth;
  if (windowWidth >= 480) {
    navList.classList.remove("open");
  }
});
