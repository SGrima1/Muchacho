const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-lewagon-white');
      } else {
        navbar.classList.remove('navbar-lewagon-white');
      }
    });
  }

  const banner = document.querySelector('.show-banner');
  if (banner) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        banner.classList.add('show-banner-scrolled');
      } else {
        banner.classList.remove('show-banner-scrolled');
      }
    });
  } 
}

export { initUpdateNavbarOnScroll };


$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    var $banner = $(".show_banner");
    $banner.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
