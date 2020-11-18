$(function() {
  $(".btn").mouseover(function() {
    $(this).addClass('js-over');
  })
  $(".btn").mouseout(function() {
    $(this).removeClass('js-over');
  })
});

$(function() {
  $(window).scroll(function() {
    let position = $(window).scrollTop();
    console.log(position);
    if (position > 120) {
      console.log("aaaa");
      $(".text.js-before").fadeIn("slow");
    }
    if (position > 300) {
      $(".text.js-after").fadeIn("slow");
    }
  }) 
});
