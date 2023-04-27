const welcomeH1 = document.querySelector(".welcomeH1");
const welcomeH2 = document.querySelector(".welcomeH2");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const roomsBtn = document.getElementById("rooms");
const galleryBtn = document.getElementById("gallery");
const bookingsBtn = document.getElementById("bookings");
const contactBtn = document.getElementById("contact");
const content = document.querySelectorAll(".window");
const homeContent = document.querySelector(".window-home");
const aboutContent = document.querySelector(".window-about");
const roomsContent = document.querySelector(".window-rooms");
const galleryContent = document.querySelector(".window-gallery");
const bookingsContent = document.querySelector(".window-bookings");
const contactContent = document.querySelector(".window-contact");
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

window.onload = function () {
  setTimeout(function () {
    welcomeH1.classList.add("active");
  }, 300);
  setTimeout(function () {
    welcomeH2.classList.add("active");
  }, 500);
};

toggle.addEventListener("click", () => nav.classList.toggle("active"));

function handleButtonClick() {
  content.forEach((element) => {
    element.classList.remove("active");
  });
}

homeBtn.addEventListener("click", () => {
  handleButtonClick();
  homeContent.classList.add("active");
});

aboutBtn.addEventListener("click", () => {
  handleButtonClick();
  aboutContent.classList.add("active");
});

roomsBtn.addEventListener("click", () => {
  handleButtonClick();
  roomsContent.classList.add("active");
});

galleryBtn.addEventListener("click", () => {
  handleButtonClick();
  galleryContent.classList.add("active");
});

bookingsBtn.addEventListener("click", () => {
  handleButtonClick();
  bookingsContent.classList.add("active");
});

contactBtn.addEventListener("click", () => {
  handleButtonClick();
  contactContent.classList.add("active");
});

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
