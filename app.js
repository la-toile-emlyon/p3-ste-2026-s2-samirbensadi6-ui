const hero = document.querySelector(".bg-gradient-hero");
const header = document.querySelector("header");

if (!hero || !header) {
  console.error("Élément introuvable : vérifier les classes .bg-gradient-hero et header");
}

window.addEventListener("scroll", () => {
  const threshold = hero ? hero.clientHeight : window.innerHeight;
  
  if (window.scrollY >= threshold) {
    header.classList.add("header-white");
  } else {
    header.classList.remove("header-white");
  }
});

