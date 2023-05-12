$(function(){
$('.design-slider').slick({
  dots: false,
  slidesToShow: 4,
  variableWidth: true,
  nextArrow:  '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
  prevArrow:  '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">',
  responsive: [
    {
      breakpoint: 361,
      settings:{
        variableWidth: true,
        slidesToShow: 1,
      }
    }
  ]
})
});

