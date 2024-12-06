function toggleSearch() {
    const searchBox = document.getElementById('search-box');
    
    // Toggle the visibility of the search box
    if (searchBox.classList.contains('active')) {
      searchBox.classList.remove('active');
    } else {
      searchBox.classList.add('active');
    }
  }


  document.addEventListener("scroll", () => {
    const animatedImage = document.querySelector(".animated-image");
    const scrollPosition = window.scrollY;
  
    // Adjust the transformation based on scroll position
    if (scrollPosition > 0) {
      animatedImage.style.transform = `translateY(${scrollPosition / 5}px)`;
    } else {
      animatedImage.style.transform = `translateY(0px)`;
    }
  });
  



const steps = document.querySelectorAll('.circle-step');
let currentStep = 0;

function animateSteps() {
  // Hide all steps
  steps.forEach((step) => {
    step.style.opacity = 0;
    step.style.transform = 'scale(0.8)';
  });

  // Show the current step
  const current = steps[currentStep];
  current.style.opacity = 1;
  current.style.transform = 'scale(1)';

  // Move to the next step, loop back if at the end
  currentStep = (currentStep + 1) % steps.length;
}

// Start the animation, updating every 1.5 seconds
setInterval(animateSteps, 1000);

// Start with the first step immediately
animateSteps();



// Array of colors for cycling
const colors = ["#ff6347", "#4682b4", "#3cb371", "#ffcc00", "#ff69b4"];

// Attach a property to track the color index for each box
function cycleColors(element) {
  // Initialize colorIndex if it doesn't exist
  if (!element.colorIndex) {
    element.colorIndex = 0;
  }

  // Update the background color
  element.style.backgroundColor = colors[element.colorIndex];

  // Increment the colorIndex and loop back to 0 when it exceeds the array length
  element.colorIndex = (element.colorIndex + 1) % colors.length;
}


let currentPosition = 0;
const track = document.querySelector('.carousel-track');
const totalImages = document.querySelectorAll('.carousel-track img').length;
const imageWidth = document.querySelector('.carousel-track img').clientWidth + 20; // width + margin
const trackWidth = track.scrollWidth;

function moveCarousel(direction) {
  if (direction === 1) {
    // Move to the next image
    currentPosition -= imageWidth;
    if (Math.abs(currentPosition) >= trackWidth) {
      currentPosition = 0; // Reset to first image
    }
  } else {
    // Move to the previous image
    currentPosition += imageWidth;
    if (currentPosition > 0) {
      currentPosition = -(trackWidth - imageWidth); // Reset to last image
    }
  }
  track.style.transform = `translateX(${currentPosition}px)`;
}

// Automatically slide the images
setInterval(() => {
  moveCarousel(1);
}, 3000); // Slide every 3 seconds

// Pause on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseover', () => {
  clearInterval(autoSlide); // Stop sliding when hovered
});
carouselContainer.addEventListener('mouseout', () => {
  autoSlide = setInterval(() => {
    moveCarousel(1);
  }, 3000); // Resume sliding after mouse out
});



document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animated-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Optional: Remove animation when scrolling out
        }
      });
    },
   
  );

  items.forEach((item) => observer.observe(item));
});




function toggleMenu() {
  const menu = document.querySelector('.menu-list');
  menu.classList.toggle('show'); // Toggle the "show" class to slide in/out
}


const menuItem = document.querySelector('.menu-item');

menuItem.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    const dropdown = this.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
