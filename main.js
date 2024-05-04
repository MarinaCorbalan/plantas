// JS

const header = document.querySelector("header");
const navIcons = document.querySelector(".nav-icons");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", this.window.scrollY > 80);
  navIcons.classList.toggle("sticky", this.window.scrollY > 80);
});

//  function validateForm() {
//    let isValid = true;
//    const form = document.getElementById("contactForm");
//    const inputs = form.querySelectorAll("input, select, textarea");
//    inputs.forEach((input) => {
//      if (input.required && !input.value.trim()) {
//        isValid = false;
//        input.classList.add("error");
//      } else {
//        input.classList.remove("error");
//      }
//    });
//    return isValid;
//  }
