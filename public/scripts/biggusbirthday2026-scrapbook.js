// Draggable Images

const scrapbook = document.querySelector("#scrapbook");

let activeItem = null;
let offsetX = 0;
let offsetY = 0;
let topZ = 1;

document.querySelectorAll(".scrap-button").forEach((button) => {
  button.addEventListener("click", () => {
    const scrap = document.createElement("div");
    scrap.className = "scrap";

    if (button.classList.contains("biggus")) {
      scrap.classList.add("biggus-scrap");
    } 

    if (button.classList.contains("meme")) {
      scrap.classList.add("meme-scrap");
    } 

    if (button.classList.contains("phrase-scrap")) {
      scrap.classList.add("phrase-scrap");
    }

    scrap.style.left = "40px";
    scrap.style.top = "40px";

    const sourceImage = button.querySelector("img");

    if (sourceImage) {
      const img = document.createElement("img");
      img.src = sourceImage.src;
      img.alt = sourceImage.alt || "";
      img.draggable = false;
      scrap.appendChild(img);
    } else if (button.dataset.text) {
      scrap.textContent = button.dataset.text;
      scrap.classList.add("text-scrap");
    } else {
      return;
    }

    scrapbook.appendChild(scrap);
  });
});

scrapbook.addEventListener("pointerdown", (event) => {
  const scrap = event.target.closest(".scrap");
  if (!scrap) return;

  activeItem = scrap;
  const rect = scrap.getBoundingClientRect();
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;

  scrap.setPointerCapture(event.pointerId);
});

scrapbook.addEventListener("pointermove", (event) => {
  if (!activeItem) return;

  const rect = scrapbook.getBoundingClientRect();
  activeItem.style.left =
    `${event.clientX - rect.left + scrapbook.scrollLeft - offsetX}px`;
  activeItem.style.top =
    `${event.clientY - rect.top + scrapbook.scrollTop - offsetY}px`;
});

scrapbook.addEventListener("pointerup", () => {
  activeItem = null;
});

scrapbook.addEventListener("pointercancel", () => {
  activeItem = null;
});

scrapbook.addEventListener("dblclick", (event) => {
  const scrap = event.target.closest(".scrap");
  if (scrap) scrap.remove();
});


// Add Text

document.querySelector("#add-message").addEventListener("click", () => {
  const input = document.querySelector("#message-input");
  const message = input.value.trim();

  if (!message) return;

  const scrap = document.createElement("div");
  scrap.className = "scrap text-scrap";
  scrap.textContent = message;
  scrap.style.left = "40px";
  scrap.style.top = "40px";

  scrapbook.appendChild(scrap);
});

/* HTML to Canvas */

document.querySelector("#export-image").addEventListener("click", async () => {
  const area = document.querySelector("#scrapbook");

  try {
    const canvas = await html2canvas(area, {
      backgroundColor: null,
      scale: 2
    });

    const link = document.createElement("a");
    link.download = "biggusbirthday.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error("Could not create image:", error);
  }
});

// Change Background

const images = [
  "../images/photos/2025-11-07.jpg",
  "../images/photos/2025-11-09.jpg",
  "../images/photos/2026-01-05.jpg",
  "../images/photos/2026-02-06.jpg", 
  "../images/photos/2026-02-11.jpg",
  "../images/photos/2026-02-14.jpg",
  "../images/photos/2026-02-15.jpg",
  "../images/photos/2026-02-17.jpg",
  "../images/photos/2026-02-18-06.jpg",
  "../images/photos/2026-02-21.jpg",
  "../images/photos/2026-03-14.jpg",
  "../images/photos/2026-03-14-18-29.jpg",
  "../images/photos/2026-06-27.jpg",
  "../images/photos/2026-06-30.jpg",
  "../images/photos/2026-07-01.jpg",
  "../images/photos/2026-07-05.jpg"
];

let currentImage = 0;

const activeIndex = document.getElementById("active-index");

document.getElementById("image-count").textContent = images.length;

function showImage() {
  scrapbook.style.backgroundImage = `url("${images[currentImage]}")`;
  activeIndex.textContent = currentImage + 1;
}

document.getElementById("change-background").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  showImage();
});

showImage();

// Change Frame

const frames = [ 
  null,
  "../images/scraps/biggusbirthday2026_scrapbook-frame-01.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-02.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-03.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-04.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-05.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-06.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-07.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-08.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-09.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-10.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-11.png",
  "../images/scraps/biggusbirthday2026_scrapbook-frame-12.png"
];

const activeFrameIndex = document.querySelector("#active-frame-index");
const frameCount = document.querySelector("#image-frame-count");

frameCount.textContent = frames.length;

let currentFrame = 0;

const frameOverlay = document.querySelector("#frame-overlay");

document.querySelector("#change-frame").addEventListener("click", () => {
  currentFrame = (currentFrame + 1) % frames.length;
  activeFrameIndex.textContent = currentFrame + 1;
  frameOverlay.src = frames[currentFrame];
  if (frames[currentFrame] === null) {
    frameOverlay.hidden = true;
    frameOverlay.removeAttribute("src");
  } else {
    frameOverlay.src = frames[currentFrame];
    frameOverlay.hidden = false;
  }
});

activeFrameIndex.textContent = currentFrame + 1;



