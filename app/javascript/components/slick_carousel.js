export const slickCarousel = () => {

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true
  centerMode: true,
  focusOnSelect: true,
	infinite: true,
	centerPadding: '0px'
});
};


