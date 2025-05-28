document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const fullscreenNav = document.getElementById("myFullscreenNav");
  const closeButton = document.querySelector(".x-button");

  hamburger.addEventListener("click", function () {
    fullscreenNav.classList.add("active");
    hamburger.classList.add("active");
    fullscreenNav.style.width = "100%";
  });

  closeButton.addEventListener("click", function () {
    fullscreenNav.style.width = "0%";
    fullscreenNav.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
