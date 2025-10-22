// Update current time in milliseconds
const timeElement = document.querySelector('[data-testid="test-user-time"]');
const updateTime = () => {
  timeElement.textContent = Date.now();
};
updateTime();
setInterval(updateTime, 1000);

// form validdations
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Get error elements
  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };

  // Reset previous errors
  Object.values(errors).forEach((err) => (err.textContent = ""));
  successMessage.hidden = true;

  let valid = true;

  if (name.value.trim() === "") {
    errors.name.textContent = "Full name is required.";
    valid = false;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value)) {
    errors.email.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (subject.value.trim() === "") {
    errors.subject.textContent = "Subject is required.";
    valid = false;
  }

  if (message.value.trim().length < 10) {
    errors.message.textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    successMessage.hidden = false;
    form.reset();
  }
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const icon = document.getElementById("hamburger-icon");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
const navbar = document.querySelector(".nav-bar");
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  lastScrollTop = scrollTop;
});
