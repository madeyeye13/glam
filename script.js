document.addEventListener("DOMContentLoaded", function () {
    // Hide loader after 5 seconds
    setTimeout(function () {
      document.body.classList.add('loaded');
    }, 5000);
    
    // Add a loading animation when navigating to other pages
    document.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent immediate navigation
        const url = this.href;
  
        document.body.classList.remove('loaded'); // Show loader
  
        // Delay navigation to simulate 5s loading
        setTimeout(function () {
          window.location.href = url;
        }, 5000);
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







  