const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
const icon = document.getElementById("hamburger-icon");
const nav = document.getElementById("nav");
const logo = document.getElementById("logo");
const header = document.getElementById("header");

btn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (menu.classList.contains("invisible")) {
    // Open: Slide down + fade in
    menu.classList.remove("invisible", "opacity-0", "-translate-y-4");
    menu.classList.add("opacity-100", "translate-y-0");

    // Hamburger to X
    icon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
    icon.style.transform = "rotate(90deg) scale(1.1)";
  } else {
    // Close: Slide up + fade out
    menu.classList.remove("opacity-100", "translate-y-0");
    menu.classList.add("opacity-0", "-translate-y-4");

    setTimeout(() => menu.classList.add("invisible"), 300);

    // X to Hamburger
    icon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    icon.style.transform = "rotate(0deg) scale(1)";
  }
});

// Close on link click
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("opacity-100", "translate-y-0");
    menu.classList.add("opacity-0", "-translate-y-4");
    setTimeout(() => menu.classList.add("invisible"), 300);
  });
}); 

// Close on outside click 
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove("opacity-100", "translate-y-0");
    menu.classList.add("opacity-0", "-translate-y-4");
    setTimeout(() => menu.classList.add("invisible"), 300);
  }
});

const isScrolled = window.scrollY > 50;

// nav.classList.toggle("hScroll", isScrolled);