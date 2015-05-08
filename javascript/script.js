$(function(){
  console.log("github version ready.");
  
  $('a[href*="#"]').click(function(e) {
    e.preventDefault();
    var $target = $($(this).attr('href'));
    var scrollTop = $target.offset().top;
    $('html, body').animate({'scrollTop': scrollTop}, 500);
  });

  $( window ).scroll(function() {
    $( ".social" ).animate({fontSize: "2rem"}, 2400);
    $( "h1" ).animate({fontSize: "4rem"}, 2400);
  });

  $('#transition').fadeIn(1000, function(){       
    $('#first').hover(function(){
      $('#first').fadeOut(1000, function(){
        $('#second').fadeIn(500);
       });
    });
    $('#second').hover(function(){
      $('#second').fadeOut(1000, function(){
        $('#first').fadeIn(500);
       });
    });
});
  
/*$(function(){
      $('#moving').typed({
        strings: ["^2500 <b>Engineering</b> Student who studies Computer Science <br> ^2500 & Sustainable Engineering & Entrepreneurship </b> @Columbia ^2000", "STEM educator ^1000 & <br> STEM education advocate ^2000", "technologist ^1000 who <b>builds</b> <br> for ^500 <b>sustainability</b> ^2000", "making a <b>difference</b> ^2000 through technology"],
        typeSpeed: 0,
        showCursor: false,
        loop: true
      });
  });

var adjectives = ['Computer Science Student ^1000 @Columbia Engineering', 'STEM educator ^1000 & education advocate', 'technologist ^1000 who builds for sustainability', 'making a difference ^2000 through technology'];

var para = $('#moving');
var delayInMillis = 2500;
    
var i = 0;
    function f() {
    if( i >= adjectives.length ) {
      i = 0;
    }
    var current = adjectives[i];
    i += 1;
    para.html(current);
    
    setTimeout(f, delayInMillis);
  }
  f();*/
});
