window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".header__nav");
  
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    nav.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    nav.classList.remove("scrolled");
  }
});
