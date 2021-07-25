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
const allSections = document.querySelectorAll('section');
const navList = document.querySelector('#menu__link');
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

// build the nav in the <ul id='navbar__list'></li>
function buildNavMenu(){
  // Create nav link list like this:
  // <li class='#menu__link'><a href='#section.id'>each data-nave string</li>
  // Build a for loop to iterate over the sections to get the each section's name and add link.
  for (section of allSections){
    const li = document.createElement('li');
    const alink = document.createElement('a');
    const sectionid = `#${section.id}`;
    const name = section.getAttribute('data-nav');
    li.setAttribute('class', `menu__link ${section.id}`);
    alink.setAttribute('href', sectionid);
    alink.textContent = name;
    li.appendChild(alink);
    // Scroll to section on link click
    // Meaning: Use click event listener. Add <li> element click event listener and scroll to the correspondig section.
    li.addEventListener('click', event => {
      alink.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      });

    // Add li element in the <ul id='navbar__list'></li>
    const ulist = document.getElementById('navbar__list');
    // for (let i=0; i < allSections.length; i++){
      ulist.appendChild(li);
    // };
  };
};

// hint:
// for (section of allSections){
//     buildNavMenu(section);
// };

buildNavMenu();

// Add class 'active' to section when near top of viewport
// Hint: Use Element.getBoundingClientRect()
// 1. Add class '.my-active-class ' when scroll is in the viewport<150,
// 2. Remove class '.my-active-class' when scroll in out of the viewport>150.
// 3. And make it for loop.
function beActive(){
  for (section of allSections){
    let activeBox = section.getBoundingClientRect();
    if (activeBox.top < 100 && activeBox.bottom > 100){
      section.classList.add('my-active-class');
    } else {
      section.classList.remove('my-active-class');
    }
  };
};

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
// Meaning: ??

// Scroll to section on link click
// Meaning:

// Set sections as active
// Meaning: Use scroll event listener and call the function beActive.
document.addEventListener('scroll', function() {
  beActive();
  }
);
