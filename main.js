document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const fullscreenNav = document.getElementById("myFullscreenNav");
  const closeButton = document.querySelector(".hamburger.active");

  hamburger.addEventListener("click", function () {
    hamburger.classList.add("active");
    fullscreenNav.style.width = "100%";
  });

  closeButton.addEventListener("click", function () {
    fullscreenNav.style.width = "0%";
    hamburger.classList.remove("active");
  });
});
