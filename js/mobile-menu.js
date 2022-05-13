const btnHamburger = document.querySelector("#menuHamburger");
const header = document.querySelector(".header");
const menu = document.querySelector(".navigation--mobile");
const hamburgerMenu = document.querySelector(".hamburger-lines");
const noScroll = document.querySelector("body");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // close hamburger
    // body.classList.remove('noscroll');
    header.classList.remove("open");
    menu.classList.add("is-hidden--menu");
    hamburgerMenu.classList.remove("hamburgerOpen");
    noScroll.classList.remove("noScroll");
  } else {
    // open hamburger
    // body.classList.add('noscroll');
    header.classList.add("open");
    menu.classList.remove("is-hidden--menu");
    hamburgerMenu.classList.add("hamburgerOpen");
    noScroll.classList.add("noScroll");
  }
});
