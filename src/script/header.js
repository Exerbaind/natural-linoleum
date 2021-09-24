const menu = document.getElementById("mobileMenu");
const list = document.getElementById("list");
const mobileMenu = document.getElementById("menuHandlerButton");

menu.onclick = () => {
  list.classList.toggle("header__navigation-list--active");
  mobileMenu.classList.toggle("header__bottom-mobile-handler--active");
};
