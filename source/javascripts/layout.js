$(function(){
  $('.btn').on('mouseover', function(){
    $(this).addClass('js-over');
  })
  $('.btn').on('mouseout', function(){
    $(this).removeClass('js-over');
  })
});

// $(function(){
//   $(window).scroll(function(){
//     let position = $(window).scrollTop();
//     if (position > 120) {
//       console.log(position)
//       $('.text').animate({
//       }, 300
//       );
//     }
//   })
// });

$(function(){
  $('.page-header').each(function(){
    var $window = $(window),
        $header = $(this),
        headerOffsetTop = $header.offset().top;
    $window.on('scroll', function(){
      if ($window.scrollTop() > headerOffsetTop) {
        $header.addClass('sticky');
      } else {
        $header.removeClass('sticky');
      }
    });
    $window.trigger('scroll');
  })
});

// $(function() {
//   $('.page-header').each(function() {
//     var $window = $(window),
//         $header = $(this),
//         $headerClone = $header.contents().clone(),
//         $headerCloneContainer = $('<div class="page-header-clone"></div>'),
//         threshold = $header.offset().top + $header.outerHeight();
//     console.log(threshold);
//     $headerCloneContainer.append($headerClone);
//     $headerCloneContainer.appendTo('body');
//     $window.on('scroll', $.throttle(1000 / 15, function(){
//       if ($window.scrollTop() > threshold) {
//         $headerCloneContainer.addClass('visible');
//       } else {
//         $headerCloneContainer.removeClass('visible');
//       }
//     }));
//     $window.trigger('scroll');
//   })
// })

$(function() {
  $('.back-to-top').each(function(){
    var el = scrollableElement('html', 'body');
    $(this).on('click', function(event){
      event.preventDefault();
      $(el).animate({scrollTop: 0 }, 1000);
    });
  });
});

function scrollableElement() {
  var i, len, el, $el, scrollable;
  for (i = 0, len = arguments.length; i < len; i++) {
    el = arguments[i],
    $el = $(el);
    if ($el.scrollTop() > 0 ) {
      return el;
    } else {
      $el.scrollTop(1);
      scrollable = $el.scrollTop() > 0;
      $el.scrollTop(0);
      if (scrollable) {
        return el;
      }
    }
  }
  return [];
}
