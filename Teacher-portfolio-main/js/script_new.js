// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initializeNavbar();
  initializeThemeToggle();
  initializeBackToTop();
  initializeArtefakFilter();
  initializeScrollAnimations();
  initializeHamburgerMenu();
  loadThemePreference();
});

// ============================================
// NAVBAR ACTIVE STATE ON SCROLL
// ============================================

function initializeNavbar() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Smooth scroll navigation
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Close mobile menu
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
        }
        
        // Scroll to section
        const navHeight = document.querySelector('.navbar').clientHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// DARK/LIGHT MODE TOGGLE
// ============================================

function initializeThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  const htmlElement = document.documentElement;
  
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle.querySelector('i');
  
  if (theme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initializeBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// ARTEFAK GALLERY FILTERING
// ============================================

function initializeArtefakFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const artefakCards = document.querySelectorAll('.artefak-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter cards
      artefakCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hidden');
          // Trigger animation
          card.style.animation = 'none';
          setTimeout(() => {
            card.style.animation = 'fadeInUp 0.6s ease-out';
          }, 10);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ============================================
// HAMBURGER MENU
// ============================================

function initializeHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

// ============================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================================

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards
  const elementsToObserve = document.querySelectorAll(
    '.profil-card, .siklus-card, .artefak-card, .visi-card, ' +
    '.insight-card, .timeline-content, .penilaian-progress'
  );

  elementsToObserve.forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// LAZY LOADING IMAGES (Optional Enhancement)
// ============================================

function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ============================================
// PROGRESS BAR ANIMATION
// ============================================

function animateProgressBars() {
  const progressFills = document.querySelectorAll('.progress-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.style.width;
        fill.style.width = '0';
        
        setTimeout(() => {
          fill.style.width = width;
        }, 100);
        
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  progressFills.forEach(fill => observer.observe(fill));
}

// Call after DOM ready
document.addEventListener('DOMContentLoaded', animateProgressBars);

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('[data-reveal]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  reveals.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
  });
}

// Initialize reveal on scroll
document.addEventListener('DOMContentLoaded', revealOnScroll);

// ============================================
// PRINT-FRIENDLY FEATURES
// ============================================

function generatePrintVersion() {
  // Hide interactive elements when printing
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      .navbar, .back-to-top, .hamburger {
        display: none !important;
      }
      body {
        font-size: 12pt;
      }
    }
  `;
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', generatePrintVersion);

// ============================================
// EXPORT/DOWNLOAD FUNCTIONALITY (Optional)
// ============================================

function exportToCSV() {
  // Get table data
  const table = document.querySelector('.penilaian-table');
  let csv = [];
  
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
    const cols = row.querySelectorAll('td, th');
    let csvRow = [];
    
    cols.forEach(col => {
      csvRow.push('"' + col.innerText.trim().replace(/"/g, '""') + '"');
    });
    
    csv.push(csvRow.join(','));
  });

  // Download
  const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv.join('\n'));
  const link = document.createElement('a');
  link.setAttribute('href', csvContent);
  link.setAttribute('download', 'penilaian-data.csv');
  link.click();
}

// ============================================
// ACCESSIBILITY FEATURES
// ============================================

function initializeAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#home';
  skipLink.textContent = 'Skip to main content';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #10B981;
    color: white;
    padding: 8px;
    z-index: 10000;
  `;
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
}

document.addEventListener('DOMContentLoaded', initializeAccessibility);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images with native lazy loading
function optimizeImages() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
}

document.addEventListener('DOMContentLoaded', optimizeImages);

// ============================================
// MODAL/PREVIEW FUNCTIONALITY (Placeholder)
// ============================================

function initializePreview() {
  const previewBtns = document.querySelectorAll('[data-modal]');
  const modal = document.getElementById('previewModal');
  const modalClose = document.getElementById('modalClose');

  if (modal && modalClose) {
    previewBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        // Show modal with placeholder content
        modal.style.display = 'flex';
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `<div style="text-align: center; padding: 40px;"><p>Preview for: ${modalId}</p><p>This is a placeholder. Add your actual preview content here.</p></div>`;
      });
    });

    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initializePreview);

// ============================================
// FORM VALIDATION (If needed)
// ============================================

function validateForm(formElement) {
  const inputs = formElement.querySelectorAll('input, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#EF4444';
      isValid = false;
    } else {
      input.style.borderColor = '#E5E7EB';
    }
  });

  return isValid;
}

// ============================================
// LOCAL STORAGE MANAGEMENT
// ============================================

const portfolioStorage = {
  set: (key, value) => {
    localStorage.setItem(`portfolio-${key}`, JSON.stringify(value));
  },
  
  get: (key) => {
    const item = localStorage.getItem(`portfolio-${key}`);
    return item ? JSON.parse(item) : null;
  },
  
  remove: (key) => {
    localStorage.removeItem(`portfolio-${key}`);
  },
  
  clear: () => {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('portfolio-')) {
        localStorage.removeItem(key);
      }
    });
  }
};

// ============================================
// RESPONSIVE NAVBAR BEHAVIOR
// ============================================

function handleNavbarResponsive() {
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', debounce(function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop;
  }, 100));
}

document.addEventListener('DOMContentLoaded', handleNavbarResponsive);

// ============================================
// STATISTICS COUNTER ANIMATION
// ============================================

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const start = Date.now();

        const timer = setInterval(() => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(target * progress);
          counter.textContent = current;

          if (progress === 1) {
            clearInterval(timer);
            observer.unobserve(counter);
          }
        }, 30);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

document.addEventListener('DOMContentLoaded', animateCounters);

// ============================================
// KEYBOARD NAVIGATION
// ============================================

function initializeKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    // Escape key closes menu
    if (e.key === 'Escape') {
      const navMenu = document.getElementById('navMenu');
      const hamburger = document.getElementById('hamburger');
      
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
    }

    // Ctrl/Cmd + K for quick search (placeholder)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      console.log('Quick search triggered');
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeKeyboardNavigation);

// ============================================
// PERFORMANCE MONITORING (Optional)
// ============================================

function logPerformanceMetrics() {
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log('Page load time: ' + pageLoadTime + 'ms');
    });
  }
}

// Uncomment to enable performance monitoring
// document.addEventListener('DOMContentLoaded', logPerformanceMetrics);

console.log('E-Portfolio Script Loaded Successfully');
