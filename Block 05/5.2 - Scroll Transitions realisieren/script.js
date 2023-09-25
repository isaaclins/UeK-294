document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main > h2, main > img, main > p");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("fade-in-active");
        section.classList.add("slide-in-left-active");
        section.classList.add("swirl-in-active");
      }
      if (sectionTop > windowHeight - 100) {
        section.classList.remove("fade-in-active");
        section.classList.remove("slide-in-left-active");
        section.classList.remove("swirl-in-active");
      }

    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});