document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle("active");

    // Animate hamburger to X
    const spans = mobileMenuBtn.querySelectorAll("span");
    if (isMenuOpen) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  }

  mobileMenuBtn.addEventListener("click", toggleMenu);

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      isMenuOpen &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      toggleMenu();
    }
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
