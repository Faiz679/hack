document.addEventListener("DOMContentLoaded", function () {
  const sidebarButtons = document.querySelectorAll(".sidebar-button div");
  const sections = document.querySelectorAll(".mainbar section");

  sidebarButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'active' class from all sidebar buttons
      sidebarButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      this.classList.add("active");

      // Hide all sections
      sections.forEach((section) => section.classList.add("hidden"));

      // Show the corresponding section based on the clicked button
      if (this.classList.contains("sidebar-device")) {
        document.querySelector(".devices").classList.remove("hidden");
      } else if (this.classList.contains("sidebar-member")) {
        document.querySelector(".members").classList.remove("hidden");
      } else if (this.classList.contains("sidebar-security")) {
        document.querySelector(".security").classList.remove("hidden");
      }
    });
  });
});
let lastScrollTop = window.scrollY;
