const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value;
  const phone = contactForm.querySelector('input[type="tel"]').value;
  const message = contactForm.querySelector("textarea").value;

  const whatsappNumber = "8801718345336";

  const whatsappMessage = `
Appointment Request

Name: ${name}
Phone: ${phone}
Message: ${message}
`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");

  contactForm.reset();
});
