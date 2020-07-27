const iconMenu = document.getElementById("icon-bars");
const nav = document.getElementById("nav");

iconMenu.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});
window.addEventListener("click", (e) => {
  e.target !== iconMenu && nav.classList.contains("show-menu")
    ? nav.classList.toggle("show-menu")
    : false;
});
