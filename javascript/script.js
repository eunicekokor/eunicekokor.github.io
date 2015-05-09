$(function(){
  console.log("github version ready.");
    $('a[href*="#"]').click(function(e) {
    e.preventDefault();
    var $target = $($(this).attr('href'));
    var scrollTop = $target.offset().top;
    $('html, body').animate({'scrollTop': scrollTop}, 500);
  });
});