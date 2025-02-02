// navbar auto scroll
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

// contact
const contactForm = document.getElementById("contact-form");
const confirmationMessage = document.getElementById("confirmation-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  confirmationMessage.style.display = "block";
  contactForm.reset();
});

// data mentor
const mentorsData = [
  {
    imageUrl: "/AssetLanding/Mentor/Tom1.png",
    name: "Tom 1",
    title: "Ngejar Jerry Specialist",
  },
  {
    imageUrl: "/AssetLanding/Mentor/Tom2.png",
    name: "Tom 2",
    title: "Main Main Specialist",
  },
  {
    imageUrl: "/AssetLanding/Mentor/Tom3.png",
    name: "Tom 3",
    title: "Main Jerry Specialist",
  },
  {
    imageUrl: "/AssetLanding/Mentor/Tom4.png",
    name: "Tom 4",
    title: "Nongki Specialist",
  },
  {
    imageUrl: "/AssetLanding/Mentor/Tom5.png",
    name: "Tom 5",
    title: "Beel Specialist",
  },
  {
    imageUrl: "/AssetLanding/Mentor/Tom6.png",
    name: "Tom 6",
    title: "Teriak Specialist",
  },
  {
    imageUrl: "/AssetLanding/Mentor/Tom7.png",
    name: "Tom 7",
    title: "Simp Specialist",
  },
  {
    imageUrl: "/AssetLanding/Mentor/Tom8.png",
    name: "Tom 8",
    title: "Baik Specialist",
  },
  {
    imageUrl: "/AssetLanding/Mentor/Tom9.png",
    name: "Tom 9",
    title: "Side Eye Specialist",
  },
];

let currentMentorIndex = 0;
let currentJuryIndex = 0;

// ganti mentor
function updateMentorCard() {
  const currentMentor = mentorsData[currentMentorIndex];
  const leftMentor =
    mentorsData[
      currentMentorIndex - 1 < 0
        ? mentorsData.length - 1
        : currentMentorIndex - 1
    ];
  const rightMentor =
    mentorsData[
      currentMentorIndex + 1 >= mentorsData.length ? 0 : currentMentorIndex + 1
    ];

  // Update main mentor
  document.getElementById("mentor-image").src = currentMentor.imageUrl;
  document.getElementById("mentor-name").textContent = currentMentor.name;
  document.getElementById("mentor-specialty").textContent = currentMentor.title;

  // Update left mentor
  document.getElementById("left-mentor-image").src = leftMentor.imageUrl;
  document.getElementById("left-mentor-name").textContent = leftMentor.name;
  document.getElementById("left-mentor-specialty").textContent =
    leftMentor.title;

  // Update right mentor
  document.getElementById("right-mentor-image").src = rightMentor.imageUrl;
  document.getElementById("right-mentor-name").textContent = rightMentor.name;
  document.getElementById("right-mentor-specialty").textContent =
    rightMentor.title;

  const mainMentorCard = document.getElementById("main-mentor-card");
  const leftMentorCard = document.getElementById("left-mentor-card");
  const rightMentorCard = document.getElementById("right-mentor-card");

  mainMentorCard.classList.add("active");
  leftMentorCard.classList.remove("active");
  rightMentorCard.classList.remove("active");
}

function changeMentor(direction) {
  currentMentorIndex += direction;
  if (currentMentorIndex < 0) {
    currentMentorIndex = mentorsData.length - 1;
  } else if (currentMentorIndex >= mentorsData.length) {
    currentMentorIndex = 0;
  }
  updateMentorCard();
}

updateMentorCard();

const backgroundImages = [
  "/AssetLanding/GambarHome/1.jpg",
  "/AssetLanding/GambarHome/2.webp",
  "/AssetLanding/GambarHome/3.webp",
];
let currentImageIndex = 0;

//ganti bg
function changeHeroBackground() {
  const heroSection = document.getElementById("hero");

  setInterval(() => {
    heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;

    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  }, 3000);
}

// Call the function when the page loads
window.addEventListener("DOMContentLoaded", () => {
  changeHeroBackground();
});
