$(document).ready(function(){

  $("#mylogo").animate({"margin-top":"12rem"}, 700);
  $("#mylogo").animate({"margin-top":"3rem"}, 500);
  $("#mylogo").animate({"margin-top":"9rem"}, 500);
  $("#mylogo").animate({"margin-top":"7rem"}, 250, function(){
    $("#intro_text").fadeIn(100);
  });

$(".intro").hover(function(){
  $("#intro_text").animate({"right":"+=5%"}, "slow")
  }, 
  function(){  // Set the left to its calculated position
    $("#intro_text").animate({"right":"-=5%"}, "slow")
  });

});