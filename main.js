const navLinks = document.querySelectorAll("nav a");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.warn(`Target element not found: ${targetId}`);
    }
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseover", function (e) {
    this.style.color = "#3498db";
  });

  link.addEventListener("mouseout", function (e) {
    this.style.color = "white";
  });
});
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
      const errorMessage = document.getElementById("emailError");
      if (!errorMessage) {
        const errorSpan = document.createElement("span");
        errorSpan.id = "emailError";
        errorSpan.textContent = "Please enter a valid email address.";
        errorSpan.style.color = "red";
        emailInput.parentNode.insertBefore(errorSpan, emailInput.nextSibling);
      }
      emailInput.style.borderColor = "red";
      return;
    }

    const errorMessage = document.getElementById("emailError");
    if (errorMessage) {
      errorMessage.remove();
    }
    emailInput.style.borderColor = "";
    alert("Thank you for viewing my website!");
    contactForm.reset();
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
const testimonials = [
  {
    name: "Ewan Mbale",
    text: " Chisumphi is a great web developer.",
  },
  {
    name: "Chisumphi",
    text: "Ewan is a great web developer.",
  },
];

document
  .getElementById("addTestimonialForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let reviewerName = document.getElementById("reviewerName").value;
    let reviewerComment = document.getElementById("reviewerComment").value;

    let newTestimonial = document.createElement("div");
    newTestimonial.classList.add("testimonial");

    let citeElement = document.createElement("cite");
    citeElement.textContent = reviewerName;

    let blockquoteElement = document.createElement("blockquote");
    blockquoteElement.textContent = reviewerComment;

    newTestimonial.appendChild(citeElement);
    newTestimonial.appendChild(blockquoteElement);

    let newTestimonialsContainer = document.getElementById("newTestimonials");

    newTestimonialsContainer.appendChild(newTestimonial);

    let testimonialMessage = document.getElementById("testimonialMessage");
    testimonialMessage.textContent = "Thank you for your review!";
    testimonialMessage.style.color = "white";

    setTimeout(function () {
      testimonialMessage.textContent = "";
    }, 5000); // Clear after 5 seconds
  });
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
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
