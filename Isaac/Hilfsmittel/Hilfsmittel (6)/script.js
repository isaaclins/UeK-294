document.addEventListener("DOMContentLoaded", () => {
  const mainTexts = document.querySelectorAll(
    ".accordion > section > main"
  );

  document
    .querySelectorAll(".accordion > section > header")
    .forEach((accordionHeader, index) => {
      accordionHeader.addEventListener("click", () => {
        toggleAccordionSection(mainTexts[index]);
      });
    });

  function toggleAccordionSection(mainText) {
    mainTexts.forEach((text) => {
      if (text === mainText) {
        if (text.style.display === "block") {
          text.style.display = "none";
        } else {
          text.style.display = "block";
        }
      } else {
        text.style.display = "none";
      }
    });
  }
});