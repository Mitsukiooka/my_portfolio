$(function(){
  $('.btn').on('mouseover', function(){
    $(this).addClass('js-over');
  })
  $('.btn').on('mouseout', function(){
    $(this).removeClass('js-over');
  })
});

$(function(){
  $(window).scroll(function(){
    let position = $(window).scrollTop();
    if (position > 120) {
      console.log(position)
      $('.text').animate({
      }, 300
      );
    }
  })
});

// $(function() {
//   $(window).scroll(function() {
//     let position = $(window).scrollTop();
//     console.log(position);
//     if (position > 120) {
//       $(".text.js-before").fadeIn("slow");
//     }
//     if (position > 300) {
//       $(".text.js-after").fadeIn("slow");
//     }
//   }) 
// });
