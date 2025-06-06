document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const fullscreenNav = document.getElementById("myFullscreenNav");

  hamburger.addEventListener("click", function () {
    if (!hamburger.classList.contains("active")) {
      hamburger.classList.add("active");
      fullscreenNav.style.width = "100%";
    } else {
      fullscreenNav.style.width = "0%";
      hamburger.classList.remove("active");
    }
  });
});
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const submitButton = event.submitter;
    submitButton.textContent = "Submitted!";
    submitButton.classList.add("submitted");

    document.getElementById("contactForm").reset();
  });
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  let submitted = false;

  form.addEventListener("submit", function (event) {
    if (submitted) {
      event.preventDefault();
      alert("This form has already been submitted.");
    } else {
      submitted = true;
      form.classList.add("submitted");
    }
  });
});
