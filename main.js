document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const filterParam = params.get("filter");

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Greeting based on time
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    const hour = new Date().getHours();
    if (hour < 12) greetingEl.textContent = "Good Morning!";
    else if (hour < 18) greetingEl.textContent = "Good Afternoon!";
    else greetingEl.textContent = "Good Evening!";
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Hover scale effect for cards
  document.querySelectorAll(".hover-scale").forEach(el => {
    el.addEventListener("mouseenter", () => el.classList.add("scale-105"));
    el.addEventListener("mouseleave", () => el.classList.remove("scale-105"));
  });
});