"use strict";

// Utility function to add event listeners
const addEventOnelem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// Navbar toggling
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};
addEventOnelem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};
addEventOnelem(navbarLinks, "click", closeNavbar);

// Header behavior on scroll
const header = document.querySelector("[data-header]");
const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
addEventOnelem(window, "scroll", activeHeader);

// Tab navigation
const tabCard = document.querySelectorAll("[data-tab-card]");
let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
};
addEventOnelem(tabCard, "click", navigateTab);

  // EmailJS integration
  emailjs.init("o7PpbJU1tlTDACpw_"); 

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); 

      emailjs.sendForm("service_czimkfo", "template_kc5fuss", this).then(
        function () {
          console.log("SUCCESS!");
          alert("Your message has been sent successfully!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send the message, please try again.");
        }
      );
    });
