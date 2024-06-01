const header = document.querySelector("header");
const navIcons = document.querySelector(".nav-icons");
const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const main = document.querySelector("main");

const form = document.querySelector("#form");
const userName = document.querySelector(".input-name");
const email = document.querySelector(".input-email");
const phone = document.querySelector(".input-phone");
const enviar = document.querySelector(".btn-enviar");

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const userValue = userName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  if (userValue === "") {
    setError(userName, "El campo nombre no puede estar vacío");
  } else if (!isName(userValue)) {
    setError(userName, "Introduzca un nombre válido");
  } else {
    setCorrect(userName);
  }

  if (emailValue === "") {
    setError(email, "El campo email no puede estar vacío");
  } else if (!isEmail(emailValue)) {
    setError(email, "Introduzca un email válido");
  } else {
    setCorrect(email);
  }

  if (phoneValue === "") {
    setError(phone, "El campo Teléfono no puede estar vacío");
  } else if (!isPhone(phoneValue)) {
    setError(phone, "Introduzca un teléfono válido");
  } else {
    setCorrect(phone);
  }
};

const setError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "contact-field error";
  small.innerText = message;
};

const setCorrect = (input) => {
  const formControl = input.parentElement;
  formControl.className = "contact-field correct";
};

const isName = (userName) => {
  return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userName);
};

const isEmail = (email) => {
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
};

const isPhone = (phone) => {
  return /^\d{7,14}$/.test(phone);
};
