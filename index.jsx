$(document).ready(function() {
    var currentSlide = 0;
    var slides = $('.carousel .slide');

    function carousel() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).addClass('active');
    }

    setInterval(carousel, 3000); // Change slide every 3 seconds
});