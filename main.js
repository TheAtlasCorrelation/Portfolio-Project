document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
const hamburger = document.querySelector(".hamburger");
const fullscreenNav = document.getElementById("myFullscreenNav");
const closeButton = document.querySelector(".closebtn");

hamburger.addEventListener("click", () => {
  fullscreenNav.style.width = "100%";
});

closeButton.addEventListener("click", () => {
  fullscreenNav.style.width = "0%";
});
