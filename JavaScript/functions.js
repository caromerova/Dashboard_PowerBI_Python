//funcion para efecto de mi menu al hacer scroll
const navbar = document.getElementById("mainNavbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
