const menu = document.getElementById("mobileMenu");
const list = document.getElementById("list");
const mobileMenu = document.getElementById("menuHandlerButton");

const secondMenuHandler = document.querySelector('.header__second-menu-handler');
const secondMenuList = document.querySelector('.second-menu-navigation-list');

menu.onclick = () => {
  list.classList.toggle("header__navigation-list--active");
  mobileMenu.classList.toggle("header__bottom-mobile-handler--active");
};

secondMenuHandler.onclick = () => {
  secondMenuList.classList.toggle("second-menu-navigation-list--active");
  secondMenuHandler.classList.toggle('header__second-menu-handler--active')
  // mobileMenu.classList.toggle("header__bottom-mobile-handler--active");
};
