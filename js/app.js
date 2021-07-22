/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
// Access the ul by it's id name
const navbarList=document.querySelector('#menu__link');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// function(Helper){
//
// }


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
// create navigation in HTML with JS as the following elements:
// <ul id="navbar__list"></ul>
function createNavLink(section) {
    const li = document.createElement("li");
    const aElem = document.createElement("a");
    const link = `#${section.id}`;
    const name = section.getAttribute("data-nav");
    aElem.setAttribute("href", link);
    aElem.setAttribute("class", `menu__link ${section.id}`);
    aElem.textContent = name;
    li.appendChild(aElem);
    return li;
}
// build the nav
function buildNavMenu() {
	// const navFragment = document.createDocumentFragment();
  const nav = document.getElementById("navbar__list");
  for (const section of sections) {
    const navList = createNavLink(section);
    nav.appendChild(navList);
  };
}


// Add class 'active' to section when it is near top of viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate.
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
      // const id = section.getAttribute("id");  document.querySelector(`.${id}`).classList.remove("active");
      section.classList.add("my-active-class");
    } else {
      // Remove active state from other section and corresponding Nav link.
      // const id = section.getAttribute("id");  document.querySelector(`.${id}`).classList.remove("active");
      section.classList.remove("my-active-class");
    }
  }
}

// Make sections active when you scroll
document.addEventListener("scroll", function() {
  makeActive();
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.addEventListener("DOMContentLoaded", function() {
  //Build navigation menu when the DOM is ready
  buildNavMenu();
}
);


// Set sections as active
