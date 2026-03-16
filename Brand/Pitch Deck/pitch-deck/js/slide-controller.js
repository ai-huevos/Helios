/*
  AI Huevos Pitch Deck - Slide Controller
  Keyboard navigation and slide management
*/

class SlideController {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.totalSlides = this.slides.length;
    this.currentSlide = 1;

    // UI elements
    this.currentSlideDisplay = document.querySelector('.current-slide');
    this.totalSlidesDisplay = document.querySelector('.total-slides');

    this.init();
  }

  init() {
    // Set total slides
    if (this.totalSlidesDisplay) {
      this.totalSlidesDisplay.textContent = this.totalSlides;
    }

    // Show first slide
    this.showSlide(1);

    // Keyboard event listeners
    document.addEventListener('keydown', (e) => this.handleKeyPress(e));

    // Touch/swipe support for mobile (basic)
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    });

    // Hide nav hint after first interaction
    let interacted = false;
    const hideNavHint = () => {
      if (!interacted) {
        const navHint = document.querySelector('.nav-hint');
        if (navHint) {
          navHint.style.opacity = '0';
          setTimeout(() => navHint.style.display = 'none', 300);
        }
        interacted = true;
      }
    };

    document.addEventListener('keydown', hideNavHint, { once: true });
  }

  handleKeyPress(e) {
    switch(e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ': // Spacebar
      case 'PageDown':
        e.preventDefault();
        this.nextSlide();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        this.previousSlide();
        break;

      case 'Home':
        e.preventDefault();
        this.goToSlide(1);
        break;

      case 'End':
        e.preventDefault();
        this.goToSlide(this.totalSlides);
        break;

      // Number keys 1-9 for quick navigation
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        e.preventDefault();
        const slideNum = parseInt(e.key);
        if (slideNum <= this.totalSlides) {
          this.goToSlide(slideNum);
        }
        break;

      // Escape to exit fullscreen (if supported)
      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
        break;

      // 'f' for fullscreen
      case 'f':
      case 'F':
        e.preventDefault();
        this.toggleFullscreen();
        break;
    }
  }

  handleSwipe(startX, endX) {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - next slide
        this.nextSlide();
      } else {
        // Swiped right - previous slide
        this.previousSlide();
      }
    }
  }

  showSlide(slideNumber) {
    // Validate slide number
    if (slideNumber < 1 || slideNumber > this.totalSlides) {
      return;
    }

    // Hide all slides
    this.slides.forEach(slide => {
      slide.classList.remove('active');
    });

    // Show current slide
    const currentSlideElement = document.querySelector(`[data-slide="${slideNumber}"]`);
    if (currentSlideElement) {
      currentSlideElement.classList.add('active');
    }

    // Update current slide number
    this.currentSlide = slideNumber;

    // Update UI
    if (this.currentSlideDisplay) {
      this.currentSlideDisplay.textContent = this.currentSlide;
    }

    // Update slide counter styling for dark slides
    this.updateCounterStyle(currentSlideElement);

    // Announce slide change for screen readers
    this.announceSlideChange(slideNumber);
  }

  updateCounterStyle(slideElement) {
    const counter = document.querySelector('.slide-counter');
    if (counter && slideElement) {
      if (slideElement.classList.contains('slide-dark')) {
        counter.style.background = 'rgba(0, 0, 0, 0.7)';
        counter.style.color = 'var(--light-gray)';
      } else {
        counter.style.background = 'rgba(255, 255, 255, 0.9)';
        counter.style.color = 'var(--dark-gray)';
      }
    }
  }

  announceSlideChange(slideNumber) {
    // Create or update live region for screen readers
    let announcer = document.getElementById('slide-announcer');
    if (!announcer) {
      announcer = document.createElement('div');
      announcer.id = 'slide-announcer';
      announcer.className = 'sr-only';
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      document.body.appendChild(announcer);
    }
    announcer.textContent = `Slide ${slideNumber} of ${this.totalSlides}`;
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  previousSlide() {
    if (this.currentSlide > 1) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  goToSlide(slideNumber) {
    this.showSlide(slideNumber);
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}

// Initialize slide controller when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new SlideController();
  });
} else {
  // DOM already loaded
  new SlideController();
}

// Prevent accidental page navigation
window.addEventListener('beforeunload', (e) => {
  // Only show warning if not in development
  if (window.location.protocol !== 'file:') {
    e.preventDefault();
    e.returnValue = '';
  }
});
