const openBtn = document.getElementById("open-btn");
      const closeBtn = document.getElementById("close-btn");
      const sideBar = document.getElementById("sideBar");

      openBtn.addEventListener("click", () => {
        sideBar.classList.remove("-translate-x-full");
        sideBar.classList.add("translate-x-0");
      });

      closeBtn.addEventListener("click", () => {
        sideBar.classList.remove("translate-x-0");
        sideBar.classList.add("-translate-x-full");
      });