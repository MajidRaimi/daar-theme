// Daar Store - Main Application JS

import 'sweetalert2/dist/sweetalert2.min.css';

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
});

/**
 * Sticky header with scroll-aware show/hide
 */
function initStickyHeader() {
  const header = document.querySelector('.dar-header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('shadow-sm');
    } else {
      header.classList.remove('shadow-sm');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('[aria-label="Menu"]');
  const mobileMenu = document.querySelector('.dar-mobile-menu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuBtn.querySelector('i').className = isOpen ? 'sicon-menu text-xl text-dar-dark' : 'sicon-close text-xl text-dar-dark';
  });
}

// Listen for Salla events
salla.event.on('cart::item.added', () => {
  salla.cart.event.onItemAdded((response) => {
    // Cart item added feedback is handled by salla web components
  });
});
