// Daar Store - Main Application JS

import 'sweetalert2/dist/sweetalert2.min.css';

document.addEventListener('DOMContentLoaded', () => {
  initFloatingNav();
  initSearchOverlay();
});

/**
 * Floating navbar - adds shadow/border on scroll
 */
function initFloatingNav() {
  const wrapper = document.querySelector('.dar-header-wrapper');
  if (!wrapper) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 20) {
      wrapper.classList.add('scrolled');
    } else {
      wrapper.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Search overlay - close on backdrop click or Escape
 */
function initSearchOverlay() {
  const overlay = document.getElementById('dar-search-overlay');
  if (!overlay) return;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      overlay.classList.add('hidden');
    }
  });
}
