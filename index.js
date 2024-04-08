const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-close");
const menuDropdown = document.querySelector("#mobile-dropdown");
const mobileMenu = document.querySelector(".mobile-menu");
const gray = document.querySelector(".gray");
const mobileLink = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", () => {
  menuDropdown.classList.add("active");
  mobileMenu.classList.add("active");
  gray.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  removeActive();
});

gray.addEventListener("click", () => {
  removeActive();
});

mobileLink.forEach((link) => {
  link.addEventListener("click", () => {
    removeActive();
  });
});

const removeActive = () => {
  menuDropdown.classList.remove("active");
  mobileMenu.classList.remove("active");
  setTimeout(() => {
    gray.classList.remove("active");
  }, 200); // the 200ms was based on the transition duration of the menu
  // waits for the menu to leave the screen before removing the gray background
};
