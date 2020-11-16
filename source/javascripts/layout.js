$(function() {
  $(".btn").mouseover(function() {
    $(this).addClass('js-over');
  })
  $(".btn").mouseout(function() {
    $(this).removeClass('js-over');
  })
});