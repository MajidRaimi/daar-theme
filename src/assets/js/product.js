// Daar Store - Product Page JS

document.addEventListener('DOMContentLoaded', () => {
  initProductGallery();
});

function initProductGallery() {
  const thumbnails = document.querySelectorAll('.dar-product-gallery button');
  const slider = document.getElementById('product-images');

  if (!thumbnails.length || !slider) return;

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      // Update active thumbnail
      thumbnails.forEach(t => t.classList.remove('border-dar-olive'));
      thumb.classList.add('border-dar-olive');

      // Navigate slider
      if (slider.swiper) {
        slider.swiper.slideTo(index);
      }
    });
  });
}
