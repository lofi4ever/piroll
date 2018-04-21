$(function() {

  $('#load-more').loadMore({
    button: $('.btn--load'),
    number: 8,
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    dots:true,
    loop:true,
    nav:false,
    pagination: true,
  })

  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.header-menu').slideToggle(300, function() {
      if($(this).css('display') == 'none') {
        $(this).removeAttr('style');
      }
    });
  });

  $('.overlay a').magnificPopup({type:'image'});

  $('.galleryItem').on('click', function() {
    $(this).find('a').trigger('click')
  });

  $(window).on('scroll scrollstart touchmove orientationchange resize', function() {
    $('.achievementsListItem__icon').checkAnimation();
    $('.galleryItem--animate').checkAnimation();
    $('h2').each(function() {
      $(this).checkAnimation();
    });
    $('.section-heading p').each(function() {
      $(this).checkAnimation();
    });
  });
});
