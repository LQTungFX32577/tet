let currentIndex = 0;
const slides = document.querySelectorAll('.banner-slide');
const totalSlides = slides.length;

function addToCart() {
    location.assign("https://order.ipos.vn/menu?pos_parent=BRAND-D9A5&pos_id=97335&source=DEFAULT");
  }

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  const offset = -currentIndex * 100;
  document.querySelector('.banner-container').style.transform = `translateX(${offset}%)`;
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);