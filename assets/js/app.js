// Scroll suave para navegación y botones
document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("data-scroll");
    if (sectionId) {
      const section = document.getElementById(sectionId);
      window.scrollTo({
        top: section.offsetTop - document.querySelector(".navbar").offsetHeight,
        behavior: "smooth"
      });
    }
  });
});
// Inicializar Typed.js
new Typed("#typed", {
  strings: ["Sabores que inspiran.", "Innovación sin límites.", "Calidad en cada detalle."],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});
// GSAP Parallax en el Hero
gsap.to("#hero", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    scrub: true
  },
  backgroundPosition: "center 15%"
});
// Lazy Loading con IntersectionObserver
const lazyImages = document.querySelectorAll(".lazy");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute("data-src");
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
});
lazyImages.forEach((img) => observer.observe(img));
// Filtro y búsqueda en productos
const filterBtns = document.querySelectorAll(".filter-btn");
const productItems = document.querySelectorAll(".product-item");
const buscador = document.getElementById("buscador");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    productItems.forEach((item) => {
      item.style.display =
        filter === "all" || item.getAttribute("data-category") === filter ? "block" : "none";
    });
  });
});
buscador.addEventListener("input", () => {
  const query = buscador.value.toLowerCase();
  productItems.forEach((item) => {
    const title = item.querySelector(".card-title").textContent.toLowerCase();
    item.style.display = title.includes(query) ? "block" : "none";
  });
});
