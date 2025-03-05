document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".sidenav a.side-option");
    const sections = document.querySelectorAll(".sidenav-content section");
  

    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove 'active' class from all menu items
        menuItems.forEach((menuItem) => menuItem.classList.remove("active"));
        
        // Add 'active' class to the clicked menu item
        this.classList.add("active");

        // Hide all sections
      sections.forEach((section) => section.classList.add("hidden"));

      // Show the corresponding section based on the clicked button
      if (this.classList.contains("side-devices")) {
        document.querySelector("#devices").classList.remove("hidden");
      } else if (this.classList.contains("side-members")) {
        document.querySelector("#members").classList.remove("hidden");
      } else if (this.classList.contains("side-security")) {
        document.querySelector("#security").classList.remove("hidden");
      }
      });
    });
  });

  const addDevices = document.querySelector(".second-nav-add");
  const removeAddDevices = document.querySelectorAll(".devices-btn .devices-btn-style");
  var blurBackground = `
      .create-devices-blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    position: fixed;
    z-index: 998;
}`;
  var styleSheet = document.createElement("style");
  styleSheet.textContent = blurBackground

  addDevices.addEventListener("click", function () {
    document.querySelector(".create-devices-blur").classList.remove("hidden");
    document.head.appendChild(styleSheet)
  });

  removeAddDevices.forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelector(".create-devices-blur").classList.add("hidden");
      document.head.removeChild(styleSheet);
    });
  });
  