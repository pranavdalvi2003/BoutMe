/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Add this to your existing JavaScript file (assets/js/steller.js) or create a new one

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const checkVisibility = () => {
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      // Check if the section is in the viewport
      if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        setTimeout(() => {
          section.classList.add("visible");
        }, index * 200); // 200ms delay between sections
      } else {
        // Remove the 'visible' class if the section is not in the viewport
        section.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("load", checkVisibility);
});

// Add any interactive JavaScript functionality here if needed
document.addEventListener("DOMContentLoaded", function () {
  // Example: Add animations or interactivity
  const resumeCards = document.querySelectorAll(".resume-card");
  resumeCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});

// smooth scroll
$(document).ready(function () {
  $(".nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
