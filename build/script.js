"use strict";

const icon = document.querySelector(".icon");
const heroIcon = document.querySelector(".heroicon");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

icon.addEventListener("click", function (e) {
  e.preventDefault();
  iconClose.classList.toggle("hidden");
  iconHamburger.classList.toggle("hidden");
  nav.classList.remove("hidden");
});

heroIcon.addEventListener("click", function () {
  iconHamburger.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
  nav.classList.add("hidden");
});

body.scrollIntoView({ behavior: "smooth" });
