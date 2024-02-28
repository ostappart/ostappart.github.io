/*
* toggleMenu()
* Provides functionality for the hamburger menu
* collapsible behavior. 
*/
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }