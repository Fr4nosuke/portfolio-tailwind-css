//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixnav = header.offsetTop;

  if (window.pageYOffset > fixnav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//hambuger aktif
const hambuger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");

hambuger.addEventListener("click", function () {
  hambuger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});
