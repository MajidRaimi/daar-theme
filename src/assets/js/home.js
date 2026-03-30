// Daar Store - Home Page JS

document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
});

function initHeroAnimations() {
  const hero = document.querySelector('.dar-hero');
  if (!hero) return;

  // Fade in hero content
  const content = hero.querySelector('.container');
  if (content) {
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    requestAnimationFrame(() => {
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    });
  }
}
