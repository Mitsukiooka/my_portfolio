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