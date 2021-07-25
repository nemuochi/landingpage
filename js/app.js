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

// References:
 // - https://github.com/AmaPal09/UD_FEND_PRJ2/tree/trunk/js
 // - https://github.com/clennone/landing-page-christ/blob/gh-pages/js/app.js
 // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
 // - https://knowledge.udacity.com/

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

// build the nav menu in the <ul id='navbar__list'></li>
// Create nav link list like this:
// <li class='menu__link section.id'><a href='#section.id'>each 'data-nav' string</li>
// Build a for loop to iterate over the sections to get the each section's name and add link.
// Hint:
// for (section of allSections){
//     buildNavMenu(section);
// };
function buildNavMenu(){
  for (section of allSections){
    const li = document.createElement('li');
    const alink = document.createElement('a');
    // const sectionid = `#${section.id}`;
    const name = section.getAttribute('data-nav');
    li.setAttribute('class', `menu__link ${section.id}`);
    alink.setAttribute('href', `#${section.id}`);
    alink.textContent = name;
    li.appendChild(alink);
    // Scroll to section on link click
    // Use click event listener. Add <li> element click event listener and scroll to the correspondig section.
    li.addEventListener('click', event => {
      section.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      });
    // Add li element in the <ul id='navbar__list'></li>
    const ulist = document.getElementById('navbar__list');
    ulist.appendChild(li);
  };
};

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

// Add GoToTop Button
function AddTopBtn(){
  const gotoTop = document.createElement('button');
  gotoTop.classList.add('btn-top');
  gotoTop.innerText = 'Go to Top';
  // Add scroll event listener so the button appears more than 500 px away from the top.
  window.addEventListener('scroll', event => {
    let scroll = this.scrollY;
    if (scroll > 500) {
      gotoTop.style.display = 'block';
      }else{
      gotoTop.style.display = 'none';
    };
    // Add button on the page
    document.body.appendChild(gotoTop);
    }
  );
};
AddTopBtn();

// Add event listener when you click the Go to Top button.
function scrolltoTop(){
  document.addEventListener('click', event => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
};
scrolltoTop();
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildNavMenu();

// Scroll to section on link click

// Set sections as active
// Use scroll event listener and call the function beActive.
document.addEventListener('scroll', function() {
  beActive();
  }
);
