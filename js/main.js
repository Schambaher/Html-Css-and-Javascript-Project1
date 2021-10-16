const headerMenu = document.querySelector(".header-menu");

headerMenu.addEventListener("click", function () {
  const headerNavigation = document.querySelector(".header-navigation");
  headerNavigation.classList.toggle("show");
});
