// Hero background slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex) slide.classList.add('active');
  });

  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlide, 5000); // every 5 seconds

// Testimonials rotation
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial() {
  testimonials.forEach((testimonial, index) => {
    testimonial.classList.remove('active');
    if (index === testimonialIndex) testimonial.classList.add('active');
  });

  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(showTestimonial, 7000); // every 7 seconds
