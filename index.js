
var nav = document.querySelector("nav");
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 100) {
                nav.style.backgroundColor = "#fffaf6";
            } else {
                nav.style.backgroundColor = "transparent";
            }
        });

// Get the slideshow element
const slideshow = document.querySelector('.slideshow');

// Get the width of each image
const slideWidth = slideshow.clientWidth;

// Initialize the current slide index
let slideIndex = 0;

// Function to calculate the total width of the slideshow
function calculateSlideshowWidth() {
  const totalWidth = slideWidth * slideshow.children.length;
  slideshow.style.width = `${totalWidth}px`;
}

// Function to animate the slideshow
function slide() {
  // Calculate the new position for the slideshow
  const newPosition = -slideWidth * slideIndex;
  slideshow.style.transform = `translateX(${newPosition}px)`;

  // Increment the slide index
  slideIndex++;

  // Reset the slide index if it exceeds the number of images
  if (slideIndex >= slideshow.children.length) {
    slideIndex = 0;
  }

  // Call the slide function again after 3 seconds
  setTimeout(slide, 3000);
}

// Calculate the initial width of the slideshow
calculateSlideshowWidth();

// Start the slideshow
slide();


