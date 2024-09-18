document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds on initial page load
  setTimeout(function () {
      document.body.classList.add('loaded');
  }, 2000);

  // Add a loading animation when navigating to other pages
  document.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (e) {
          const url = this.href;
          
          // Allow clicking the current page without preventing default behavior
          if (url === window.location.href) {
              return;
          }

          e.preventDefault(); // Prevent immediate navigation for other links
          
          // Check if the loader is already active to avoid showing it twice
          if (document.body.classList.contains('loaded')) {
              document.body.classList.remove('loaded'); // Show loader

              // Delay navigation to simulate 2s loading
              setTimeout(function () {
                  window.location.href = url;
              }, 2000);
          }
      });
  });
});





  ////////////Header
// Toggle the navigation menu
document.querySelector('.nav-toggle').addEventListener('click', function() {
  var navMenu = document.querySelector('.nav-menu');
  
  // Toggle the 'open' class for sliding effect
  navMenu.classList.toggle('open');
});



///////JAVASCRIPT FOR HERO

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides [currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides [currentSlide].classList.add('active');
}

setInterval(showNextSlide, 6000);

window.onload = function() {
  slides[currentSlide].classList.add('active');
}

/////SECTION RUSH IN

document.addEventListener('DOMContentLoaded', function() {
  const expSection = document.getElementById('exp');
  let hasAnimated = false;

  // Function to trigger the animation
  function triggerAnimation() {
    if (!hasAnimated) {
      hasAnimated = true;
      expSection.style.opacity = 1;
      expSection.style.transform = 'translateX(0) skewX(0)';
    }
  }

  // Set up IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerAnimation();
        observer.unobserve(expSection); // Stop observing after animation triggers
      }
    });
  }, {
    threshold: 0.01 // Trigger when at least 4% of the section is in view
  });

  observer.observe(expSection);
});




// JAVASCRIPT FOR NUMBER INCREASE


document.addEventListener('DOMContentLoaded', function() {
  const clientCount = document.getElementById('client-count');
  const satisfactionCount = document.getElementById('satisfaction-count');
  const satisfy = document.getElementById('satisfaction-coun');
  const clientTarget = 6;
  const satisfactionTarget = 125;
  const satisfyTarget = 100;
  let hasAnimated = false;

  function animateCount(element, target, suffix = '') {
      let count = 0;
      const duration = 2000;
      const increment = target / (duration / 60);

      function updateCount() {
          count += increment;
          if (count > target) count = target;
          element.textContent = Math.floor(count) + suffix;
          if (count < target) {
              requestAnimationFrame(updateCount);
          }
      }

      requestAnimationFrame(updateCount);
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;
              animateCount(clientCount, clientTarget, '+');
              animateCount(satisfactionCount, satisfactionTarget, '+');
              animateCount(satisfy, satisfyTarget, '%');
          }
      });
  }, {
      threshold: 0.1 // Trigger when at least 10% of the section is in view
  });

  observer.observe(document.getElementById('exp'));
});


//=====================Progress Bar==========//


document.addEventListener('DOMContentLoaded', function() {
  const progressBars = document.querySelectorAll('.progress');
  let hasAnimated = false;

  function animateProgressBar() {
      progressBars.forEach(bar => {
          const percentage = bar.getAttribute('data-percentage');
          bar.style.width = percentage + '%';
          bar.textContent = percentage + '%';
      });
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;
              animateProgressBar();
          }
      });
  }, {
      threshold: 0.1 // Trigger when at least 10% of the section is in view
  });

  observer.observe(document.getElementById('progress-section'));
});



///////////JAVASCRIPT FOR TESTIMOONIAL

// const testimonials = [
//   { name: "Lateefat & Abdullahi", content: "What I admire about you is your personality, your understanding. You were all calm all through the planning process. You made sure everything was well connected despite that I was multi-tasking. Glam1907 is actually the best.I also commend your team", image: "/image/16.jpg" },
//   { name: "Lola & Segun", content: "Thank you very much for standing by me through it, all for your commitment, the love I got from you was overwhelming and for giving me a beautiful ceremony, it was perfect and your coordinators were superb. The top-notch professionalism, you're the best of the best.", image: "/image/14.jpg" },
//   { name: "Mrs Adefeiyisan", content: "Many thanks for your services. We really appreciate you and your team's effort in ensuring that the event was a success, all the time working closely with us and family to achieve this. I did not regret working with you and I will do that over and over again.", image: "/image/10.jpg" },
//   { name: "Temi & Lanre", content: "I wanted to take a moment to express my deepest gratitude for the exceptional work you put into planning our wedding. Your dedication and tireless efforts over the course of eight months truly paid off. Your team are superb, wonderful and well-co-ordinated. Thanks.", image: "/image/15.jpg" },
//   { name: "Sltillinfinity", content: "Words can't express how much I appreciate you and your work. There were bumps along the way, indecision and others but you and your team finished work. I must say, it was too good. You're everywhere making sure that things work perfectly. Thank you very much", image: "/image/11.jpg" },
//   // { name: "Sarah Wilson", content: "Innovative and user-friendly. A game-changer in the industry.", image: "/api/placeholder/80/80" },
// ];

// let currentIndex = 0;
// const testimonialSlider = document.querySelector('.testimonial-slider');
// const contentElement = document.querySelector('.content');
// const nameElement = document.querySelector('.name');
// const imageElement = document.querySelector('.testimonial-image');
// let intervalId;

// function updateTestimonial() {
//   const testimonial = testimonials[currentIndex];
//   contentElement.textContent = testimonial.content;
//   nameElement.textContent = testimonial.name;
//   imageElement.src = testimonial.image;
//   imageElement.alt = testimonial.name;
// }

// function nextTestimonial() {
//   testimonialSlider.style.transform = 'translateX(-100%)';
//   setTimeout(() => {
//       currentIndex = (currentIndex + 1) % testimonials.length;
//       updateTestimonial();
//       testimonialSlider.style.transition = 'none';
//       testimonialSlider.style.transform = 'translateX(100%)';
//       setTimeout(() => {
//           testimonialSlider.style.transition = 'transform 0.5s ease';
//           testimonialSlider.style.transform = 'translateX(0)';
//       }, 50);
//   }, 500);
// }

// function startInterval() {
//   intervalId = setInterval(nextTestimonial, 6000);
// }

// function stopInterval() {
//   clearInterval(intervalId);
// }

// testimonialSlider.addEventListener('mouseenter', stopInterval);
// testimonialSlider.addEventListener('mouseleave', startInterval);

// // Touch swipe functionality
// let touchStartX = 0;
// let touchEndX = 0;

// document.addEventListener('touchstart', e => {
//   touchStartX = e.changedTouches[0].screenX;
//   stopInterval();
// });

// document.addEventListener('touchend', e => {
//   touchEndX = e.changedTouches[0].screenX;
//   handleSwipe();
//   startInterval();
// });

// function handleSwipe() {
//   if (touchStartX - touchEndX > 50) {
//       nextTestimonial();
//   }
// }

// // Initialize
// updateTestimonial();
// startInterval();




const testimonials = document.querySelectorAll('.testimonial');
const slider = document.getElementById('testimonialSlider');
let index = 0;
let interval;

function showTestimonial(idx) {
  slider.style.transform = `translateX(${-idx * 100}%)`;
  testimonials.forEach(testimonial => testimonial.classList.remove('active'));
  testimonials[idx].classList.add('active');
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

function previousTestimonial() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
}

function startAutoSlide() {
  interval = setInterval(nextTestimonial, 6000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

// Pause on hover
slider.addEventListener('mouseover', stopAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);

// Swipe gestures
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX) {
    nextTestimonial();
  }
  if (touchEndX > touchStartX) {
    previousTestimonial();
  }
}

// Initialize slider
startAutoSlide();







//////SCRIPT FOR SUBSCRIBE 


const scriptURL = 'https://script.google.com/macros/s/AKfycbw_uB_NnUmE6kgDvNXZGwnfliw6MRoCQoecVupgkHUr0LlUB4_P2hCAlvl9FjrqTP_7/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
const dotLoading = document.getElementById("dot-loading")
const subscribeButton = document.getElementById("subscribe-button")

form.addEventListener('submit', e => {
    e.preventDefault()
    dotLoading.style.display = 'inline-block'
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            dotLoading.style.display = 'none'
            msg.innerHTML = "Thank You For Subscribing!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => {
            dotLoading.style.display = 'none'
            console.error('Error!', error.message)
        })
})







  