// NAVBAR SHRINK
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// NAVBAR HIGHLIGHT
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlink");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// FADE SECTIONS
const allSections = document.querySelectorAll("section");

function revealSections() {
  allSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();

// PROJECT SWITCH BUTTONS
const projectButtons = document.querySelectorAll(".project-btn");
const projectCards = document.querySelectorAll(".project-card");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectID = button.dataset.project;

    projectCards.forEach((card) => card.classList.remove("active"));
    projectButtons.forEach((btn) => btn.classList.remove("active"));

    document.getElementById(projectID).classList.add("active");
    button.classList.add("active");
  });
});

// PROJECT DATA
const projectData = {
  primordial: {
    title: "Primordial Horizons",
    images: [
      "Images/primordialportfolio.png",
      "Images/primordial1.png",
      "Images/primordial2.png",
      "Images/primordial3.png",
      "Images/primordial4.png",
      "Images/primordial5.png",
      "Images/primordial6.png",
    ],
    video: "https://www.youtube.com/embed/jQxaroUZ5io",
    description: `
<p>Primordial Horizons is a survival real-time strategy (RTS) game where players must build, manage resources, and defend their base against increasingly difficult enemy waves. Set in a harsh prehistoric environment, the game challenges players to balance strategic planning, unit management, and base defense in order to survive.</p>
            <p>Players construct buildings, gather essential resources such as meat and materials, and train units to strengthen their defenses. As time progresses, waves of hostile creatures and enemies attack the player's base, requiring careful placement of defenses and effective unit control to stay alive.</p>
            <p>The game features a phase-based gameplay system that alternates between building preparation and intense enemy waves. With multiple difficulty modes and strategic objectives, Primordial Horizons encourages players to adapt their strategies and manage their resources efficiently to ensure their settlement survives the dangers of the primordial world.</p>
`,
  },

  eco: {
    title: "EcoVentures",
    images: ["Images/eco1.png", "Images/eco2.png"],
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    description: `
<p>Ecoventures is a single-player Arcade Simulation–Trivia game developed in Unity for Android devices. The game follows the journey of a student startup founder who aims to build a successful and sustainable business while following eco-friendly practices inspired by the Zero Waste Infinite Solutions (ZWIS) initiative of FEU Tech.</p>

<p>Players create products using scrap materials to produce environmentally responsible goods. Once completed, these products can be sold to consumers to earn money and progress through the game.</p>

<p>The game features three stages with increasing consumer demand. In the first stage, the player manages the entire process alone, handling both production and sales. In later stages, players can recruit helpers to assist with tasks. Both the player and helpers have limited energy, which must be managed carefully and restored by purchasing food.</p>

<p>Ecoventures focuses on resource management, sustainability, and strategic decision-making as players balance production, energy, and eco-friendly practices to successfully grow their startup.</p>
`,
  },
};

// PROJECT DETAILS
const viewButtons = document.querySelectorAll(".view-project");

const projectDisplay = document.querySelector(".projects-display");
const projectDetails = document.querySelector(".project-details");

const title = document.getElementById("details-title");
const description = document.getElementById("details-description");
const imgElement = document.getElementById("details-img");
const video = document.getElementById("details-video");

let images = [];
let currentImage = 0;

viewButtons.forEach((button) => {
  const projectKey = button.dataset.project;

  button.addEventListener("click", () => {
    if (projectKey === "eco") {
      alert("EcoVentures is coming soon!");
      return;
    }

    const project = projectData[button.dataset.project];

    projectDisplay.style.display = "none";
    projectDetails.classList.add("active");

    title.textContent = project.title;
    description.innerHTML = project.description;

    images = project.images;
    currentImage = 0;
    imgElement.src = images[currentImage];

    video.src = project.video;
  });
});

// IMAGE SLIDER
document.querySelector(".img-next").addEventListener("click", () => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  imgElement.src = images[currentImage];
});

document.querySelector(".img-prev").addEventListener("click", () => {
  currentImage--;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  imgElement.src = images[currentImage];
});

// BACK BUTTON
document.querySelector(".back-projects").addEventListener("click", () => {
  projectDetails.classList.remove("active");
  projectDisplay.style.display = "flex";
});
