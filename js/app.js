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
const allSections = document.querySelectorAll("section");
const navList = document.querySelector("#menu__link");
/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav in the <ul id="navbar__list"></li>
function buildNavMenu(section){
  // create nav link
  const li = document.createElement("li");
  const alink = document.createElement("a");
  const sectionid = "#${section.id}";
  const name = section.getAttribute("data-nav");
  li.setAttribute("class", "menu__link ${section.id}");
  alink.setAttribute("href", sectionid);
  alink.textContent = name;
  li.appendChild(alink);
  // Add li element in the <ul id="navbar__list"></li>
  const ulist = document.getElementById("navbar__list");
  for (const i=0; i < allSections.length; i++){
    ulist.appendChild(li);
  };
};
buildNavMenu();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
