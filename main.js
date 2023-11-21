const toggleMenuBtn = document.querySelector("#menu-toggler");
const toggleMenuImg = document.querySelector("#menu-toggler img");
const mainNavlist = document.querySelector("#main-navlist");
const menuLinks = document.querySelectorAll("#main-navlist a");

/* On rajoute un écouteur d'evennement sur tout les liens et le bouton à l'aide d'un tableau */

[toggleMenuBtn, ...menuLinks].forEach(element => element.addEventListener("click", toggleNav));

/* Et on crée cette fonction */
function toggleNav() {
  if (mainNavlist.classList.contains("hidden")) {
    mainNavlist.classList.remove("hidden");
    toggleMenuImg.setAttribute("src", "./images/hero/cross.svg");
    toggleMenuBtn.setAttribute("aria-expanded", true);
  }
  else {
    mainNavlist.classList.add("hidden");
    toggleMenuImg.setAttribute("src", "./images/hero/menu.svg");
    toggleMenuBtn.setAttribute("aria-expanded", false);
  }
}