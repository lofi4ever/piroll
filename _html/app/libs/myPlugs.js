/*------ loadMore ------*/

(function($) {
  $.fn.loadMore = function(options) {
    var settings = $.extend({
      button: '',  //click element
      number: 2, //how many items will be shown after click
    }, options);
    var button = settings.button;
    var items = this.find('.hidden'); //take note that you have to add class 'hidden' to hidden items
    var number = settings.number;
    var start = 0;
    var finish = number;
    button.on('click', function() {
      items.slice(start, finish).removeClass('hidden');
      start+=number;
      finish+=number;
      if(start>=items.length) {
        button.css('display', 'none');
      }
    });
  };
}(jQuery));



/*------ checkAnimation ------*/

(function( $ ){
  $.fn.checkAnimation = function() {

    var context = this;
    function isElementInViewport(elem) {
      var $elem = context;
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      var elemTop = Math.round( $elem.offset().top );
      var elemBottom = elemTop + $elem.height();
      return (elemTop < viewportBottom);
    }

    // Check if it's time to start the animation.
    function checkAnimation() {
        var $elem = context;

        // If the animation has already been started
        if ($elem.hasClass('start')) return;

        if (isElementInViewport($elem)) {
            // Start the animation
            $elem.addClass('start');
        }
    }
    checkAnimation();
    return this;
  };
}(jQuery));

