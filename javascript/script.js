$(document).ready(function(){


  $("#mylogo").animate({"margin-top":"12rem"}, 700);
  $("#mylogo").animate({"margin-top":"3rem"}, 500);
  $("#mylogo").animate({"margin-top":"9rem"}, 500);
  $("#mylogo").animate({"margin-top":"7rem"}, 250, function(){
    $("#intro_text").fadeIn(100);
  });

  var left = $('#intro_text').offset().left;  // Get the calculated left position

  console.log(left);
  $(".intro").hover(function(){
    $("#intro_text").animate({"right":"+=5%"}, "slow")
    }, function(){  // Set the left to its calculated position
      $("#intro_text").animate({"right":"-=5%"}, "slow")
    });
  $("#mylogo").click(function(){
    $("#mylogo").animate({"width":"-=1%","height":"-=1%"});
    $("#mylogo").animate({"width":"+=1%","height":"+=1%"});
    $("#mylogo").fadeOut("slow");
    $("#intro_text").animate({"bottom":"0"}, 1000, function(){
      $("#intro_text").html("welcome!");
      $("#box1").fadeIn("slow", function(){
        $("#intro_text").fadeOut();
        $("#intro_text").css("z-index","-1");
        $("#box1").animate({"width":"79.5%"}, 1000);
        $("#box2").animate({"width":"20%"});
        $("#box2").fadeIn("slow", function(){
          $("html").css("background", "#B0B5B3")
          .fadeIn("slow");
        });
        $("#nav").fadeIn();
      });
    });
    });
  $("#intro_text").click(function(){
    $("#mylogo").fadeOut("slow");
    $("#intro_text").animate({"bottom":"0"}, 1000, function(){
      $("#intro_text").html("welcome!");
      $("#box1").fadeIn("slow", function(){
        $("#intro_text").fadeOut();
        $("#box1").animate({"width":"79.5%"}, 1000);
        $("#box2").animate({"width":"20%"});
        $("#box2").fadeIn("slow", function(){
          $("html").css("background", "#B0B5B3")
          .fadeIn("slow");
        });
        $("#nav").fadeIn();
      });
    });
  });

  $("#building_nav").click(function(){
    $("#building").fadeOut();
    $("#about").hide();
    $("#writing").hide();
    $("#doing").hide();
    $("#hearts").hide();
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#building").fadeIn("fast");
    });
  });

  $("#doing_nav").click(function(){
    $("#doing").fadeOut();
    $("#about").hide();
    $("#writing").hide();
    $("#building").hide();
    $("#hearts").hide();
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#doing").fadeIn();
    });
  });

  $("#writing_nav").click(function(){
    $("#writing").fadeOut();
    $("#about").hide();
    $("#building").hide();
    $("#doing").hide();
    $("#hearts").hide();
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#writing").fadeIn();
    });
  });

  $("#hearts_nav").click(function(){
    $("#hearts").fadeOut();
    $("#about").hide();
    $("#writing").hide();
    $("#doing").hide();
    $("#building").hide();
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#hearts").fadeIn();
    });
  });

  $("#img_creds").click(function(){
    $("#about").fadeOut();
    $("#building").hide();
    $("#writing").hide();
    $("#doing").hide();
    $("#hearts").hide();
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#about").fadeIn();
    });
  });

});
