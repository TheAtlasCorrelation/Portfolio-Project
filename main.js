const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }

    navLinks.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseover", function (e) {
    this.style.color = "#3498db";
  });

  link.addEventListener("mouseout", function (e) {
    this.style.color = "#555";
  });
});
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

const navbarLinks = document.querySelector(".navbar-links");
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();

  if (!isValidEmail(emailValue)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for your message!");
  contactForm.reset();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// document.getElementById('dark-mode-toggle').addEventListener('click', function() {
//   document.body.classList.add('dark-mode');
//   document.body.classList.remove('light-mode');
// });

// document.getElementById('light-mode-toggle').addEventListener('click', function() {
//   document.body.classList.add('light-mode');
//   document.body.classList.remove('dark-mode');
// });
// const themeToggle = document.getElementById("theme-toggle");
// const body = document.body;
// const navbar = document.querySelector(".navbar");
// const header = document.querySelector(".header");
// const main = document.querySelector("main");

// themeToggle.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");
//   navbar.classList.toggle("dark-mode");
//   header.classList.toggle("dark-mode");
//   main.classList.toggle("dark-mode");

//   if (body.classList.contains("dark-mode")) {
//    localStorage.setItem("theme", "dark");
//   } else {
//    localStorage.setItem("theme", "light");
//   }
// });

// if (typeof localStorage !== "undefined") {
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "dark") {
//     body.classList.add("dark-mode");
//     navbar.classList.add("dark-mode");
//     header.classList.add("dark-mode");
//     main.classList.add("dark-mode");
//   } else if (savedTheme === "light") {
//     body.classList.remove("dark-mode");
//     navbar.classList.remove("dark-mode");
//     header.classList.remove("dark-mode");
//     main.classList.remove("dark-mode");
//   }
// }
