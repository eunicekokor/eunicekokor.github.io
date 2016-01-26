$(document).ready(function(){
  $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });


function funStuff(){
    console.log("y1y");
    var colors=["peach", "rust", "orange", "ruddy", "seagreen"] ;

    for (var i = 0; i < colors.length; i++) {
      if ($('.showcase.col-1-4').hasClass(colors[i])) {
        $(this).removeClass(colors[i]);
        $(this).addClass(colors[Math.floor(Math.random()*colors.length)]);
      }
    }

    setTimeout(funStuff(), 5000);

  };

funStuff();

});
