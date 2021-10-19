const headerMenu = document.querySelector(".header-menu");

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const links = document.querySelectorAll(".header-navigation-link");
  const headerTitle = document.querySelector(".header-title");

  header.classList.toggle("sticky", window.scrollY > 0);
  links.forEach(function (link) {
    link.classList.toggle("sticky", window.scrollY > 0);
  });
  headerTitle.classList.toggle("sticky", window.scrollY > 0);
});

headerMenu.addEventListener("click", function () {
  const headerNavigation = document.querySelector(".header-navigation");
  headerNavigation.classList.toggle("show");
});
