$(document).ready(function(){
  var delay = 4500;
  $("#mylogo").click(function(){
    $("#mylogo").css('animation','logo-rotate-mobile 4s ease-in-out 1');
    setTimeout(function(){ window.location = '/about'; }, delay);
  });

//   $( ".page_heading" ).click(function() {
//   $( ".subheading" ).toggle( "explode" );
// });

  // $('.project-feature').click(function(){
  //   var src = $(this).attr("src");
  //   console.log(src);
  //   $('.overlay').css('background-image','url(' + src +')');
  //   $('overlay').show();
  //   console.log('got here');
  // })


});