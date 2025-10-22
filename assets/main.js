document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const yearTarget = document.querySelector("[data-year]");

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  if (toggle && nav) {
    const navLinks = nav.querySelectorAll("a");

    const closeNav = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
          closeNav();
        }
      })
    );

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeNav();
      }
    });
  }
});
