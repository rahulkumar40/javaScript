
const images = [
      "image-461.jpg", "image-371.jpg","image-473 copy 2.jpg", "image-473.jpg",
      "image-488.jpg", "image-489.jpg", 
  ];
  
  let currentIndex = 0;
  
  window.addEventListener('DOMContentLoaded', () => {
      const sliderImage = document.getElementById('slider-image');
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
  
      sliderImage.src = images[currentIndex];
  
      function showImage(index) {
          sliderImage.src = images[index];
          slider = document.querySelector('body');
          slider.style.backgroundImage = `url(${images[index]})`;
      }
  
      prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
          showImage(currentIndex);
      });
  
      nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
          showImage(currentIndex);
      });
  });
  