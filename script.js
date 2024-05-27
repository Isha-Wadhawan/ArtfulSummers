document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to sections
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Get the target element id
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start", // Align to the start of the element
        });
      }
    });
  });

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".showcase-img").forEach((img) => {
    img.addEventListener("click", function () {
      lightboxImg.style.display = "block";
      lightboxVideo.style.display = "none";
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
    });
  });

  document.querySelectorAll(".showcase-video").forEach((video) => {
    video.addEventListener("click", function () {
      lightboxImg.style.display = "none";
      lightboxVideo.style.display = "block";
      lightbox.style.display = "block";
      lightboxVideo.src = this.querySelector("source").src;
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
    lightboxVideo.pause();
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxVideo.pause();
    }
  });

  // Gallery carousel navigation
  const galleryCarousel = document.querySelector(".gallery-carousel");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let scrollAmount = 0;
  const itemWidth = galleryItems[0].offsetWidth + 20; // Assuming 20px gap between items

  prevButton.addEventListener("click", function () {
    if (scrollAmount > 0) {
      scrollAmount -= itemWidth;
      galleryCarousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  });

  nextButton.addEventListener("click", function () {
    if (
      scrollAmount <
      galleryCarousel.scrollWidth - galleryCarousel.clientWidth
    ) {
      scrollAmount += itemWidth;
      galleryCarousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  for (let i = 0; i < 50; i++) {
    const popper = document.createElement("div");
    popper.classList.add("popper");
    popper.style.left = "50vw"; // Center horizontally
    popper.style.bottom = "0"; // Position at the bottom
    popper.style.setProperty("--random-x", Math.random() * 100); // Random horizontal destination
    popper.style.setProperty("--random-y", Math.random() * 100); // Random vertical height
    popper.style.animationDelay = `${Math.random()}s`;
    popper.style.backgroundColor = getRandomColor();
    container.appendChild(popper);
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
