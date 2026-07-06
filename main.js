// ── NAVBAR SCROLL EFFECT ──────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── HAMBURGER MENU ────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── SCROLL REVEAL ─────────────────────────────────────
// Uses IntersectionObserver to add 'active' class when elements
// enter the viewport, triggering the CSS fade+slide animation.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target); // animate once only
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ── COUNTER ANIMATION ─────────────────────────────────
// Animates stat numbers counting up from 0 to their target value.
const animateCounter = (el) => {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;

  const update = () => {
    current += step;
    if (current < target) {
      el.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  };

  requestAnimationFrame(update);
};

// Only start counting when the stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats');
if (statsSection) statsObserver.observe(statsSection);

// ── FORM VALIDATION ───────────────────────────────────
const form = document.getElementById('contactForm');

const showError = (inputId, errorId, message) => {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  input.classList.add('error');
  error.textContent = message;
};

const clearError = (inputId, errorId) => {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  input.classList.remove('error');
  error.textContent = '';
};

const validateForm = () => {
  let valid = true;

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Name
  if (!name) {
    showError('name', 'nameError', 'Name is required.');
    valid = false;
  } else if (name.length < 2) {
    showError('name', 'nameError', 'Name must be at least 2 characters.');
    valid = false;
  } else {
    clearError('name', 'nameError');
  }

  // Phone
  const phoneRegex = /^[+]?[\d\s\-()]{7,15}$/;
  if (!phone) {
    showError('phone', 'phoneError', 'Phone number is required.');
    valid = false;
  } else if (!phoneRegex.test(phone)) {
    showError('phone', 'phoneError', 'Enter a valid phone number.');
    valid = false;
  } else {
    clearError('phone', 'phoneError');
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showError('email', 'emailError', 'Email is required.');
    valid = false;
  } else if (!emailRegex.test(email)) {
    showError('email', 'emailError', 'Enter a valid email address.');
    valid = false;
  } else {
    clearError('email', 'emailError');
  }

  // Message
  if (!message) {
    showError('message', 'messageError', 'Message is required.');
    valid = false;
  } else if (message.length < 10) {
    showError('message', 'messageError', 'Message must be at least 10 characters.');
    valid = false;
  } else {
    clearError('message', 'messageError');
  }

  return valid;
};

// Clear errors live as user types
['name', 'phone', 'email', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    const errorId = id + 'Error';
    clearError(id, errorId);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
    const successMsg = document.getElementById('formSuccess');
    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate sending — replace with real fetch() to your backend
    setTimeout(() => {
      form.reset();
      successMsg.style.display = 'block';
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;

      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 4000);
    }, 1000);
  }
});