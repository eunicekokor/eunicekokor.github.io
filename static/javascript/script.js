$(document).ready(function(){
  var delay = 4500;
  $("#mylogo").click(function(){
    $("#mylogo").css('animation','logo-rotate-mobile 4s ease-in-out 1');
    setTimeout(function(){ window.location = '/about'; }, delay);
  });


  $(".organization_list").click(function(){
    var class_detail = "";
    var important_class = "";
    var class_detail = $(this).attr("class");
    class_detail = class_detail.split(' ');
    var important_class = class_detail[1];
    $("." + important_class+".organization_detail").toggle();
  });

  $(".organization_group").click(function(){
    var class_detail = "";
    var important_class = "";
    var class_detail = $(this).attr("class");
    class_detail = class_detail.split(' ');
    var important_class = class_detail[1];
    $("." + important_class+".organization_detail").toggle();
  });
  $(".organization_detail").click(function(){
    $(this).toggle();
  });

  $(".fa-bars").click(function(){
    $(this).css('animation-iteration-count',1);
  })

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