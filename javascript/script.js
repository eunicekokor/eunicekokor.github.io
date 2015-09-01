$(document).ready(function(){

  var w = $(".proj_bubble").width();
  $(".proj_bubble").css({"height": w +'px'});

  // $("#mylogo").animate({"margin-top":"12rem"}, 700);
  // $("#mylogo").animate({"margin-top":"3rem"}, 500);
  // $("#mylogo").animate({"margin-top":"9rem"}, 500);
  // $("#mylogo").animate({"margin-top":"7rem"}, 250, function(){
  //   $("#intro_text").fadeIn(100);
  //   $("#code2040").fadeIn(100);
  // });

  $("#intro_text").fadeIn(100);
  $("#code2040").fadeIn(100);

  var left = $('#intro_text').offset().left;  // Get the calculated left position
  var left2040 = $('#code2040').offset.left;

  $(".intro").hover(function(){
    $("#intro_text").animate({"right":"+=5%"}, "slow")
    }, function(){  // Set the left to its calculated position
      $("#intro_text").animate({"right":"-=5%"}, "slow")
    });
  $("#mylogo").click(function(){
    $("#code2040").fadeOut("slow");
    $("#mylogo").hide("slow", function(){
      $("#mylogo2").fadeIn("fast");
    });
    if ($( window ).width() < 668){
      var wait_time = 6500;
    }
    else{
      var wait_time = 8500;
    }
    $("#intro_text").animate({"bottom":"0"}, wait_time, function(){
      $("#intro_text").html("welcome!");
      $("#mylogo2").fadeOut("fast");
      $("#box1").fadeIn("slow", function(){
        $("#intro_text").fadeOut();
        $("#intro_text").css("z-index","-1");
        if ($( window ).width() < 668){
          $("#box1").animate({"width":"100%"}, 1000);
          $("#box2").animate({"width":"100%"});
        console.log("TEST");
        }
        else {
          $("#box1").animate({"width":"79.5%"}, 1000);
          $("#box2").animate({"width":"20%"});
        console.log("TESTING");
        }
        $("#box2").fadeIn("slow", function(){
          $("html").css("background", "#424347")
          .fadeIn("slow");
        });
        $("#nav").fadeIn();
      });
    });
    });
  $("#intro_text").click(function(){
    $("#code2040").fadeOut("slow");
    $("#mylogo").fadeOut("slow");
    $("#mylogo").fadeOut("slow", function(){
      $("#mylogo2").fadeIn("fast");
    });
    if ($( window ).width() < 668){
      var wait_time = 1000;
    }
    else{
      var wait_time = 8500;
    }
    $("#intro_text").animate({"bottom":"0"}, wait_time, function(){
      $("#intro_text").html("welcome!");
      $("#mylogo2").fadeOut("fast");
      $("#box1").fadeIn("slow", function(){
        $("#intro_text").fadeOut();

        if ($( window ).width() < 668){
          $("#box1").animate({"width":"100%"}, 1000);
          $("#box2").animate({"width":"100%"});
        console.log("TEST");
        }
        else {
          $("#box1").animate({"width":"79.5%"}, 1000);
          $("#box2").animate({"width":"20%"});
        console.log("TESTING");
        }
        $("#box2").fadeIn("slow", function(){
          $("html").css("background", "#424347")
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
    if ($( window ).width() < 668){
    $("#box1").animate({"width":"100%"}, 1250);
    $("#box1").animate({"width":"100%"}, 500, function(){
      $("#building").fadeIn("fast");
    });
    }
    else {
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#building").fadeIn("fast");
    });
    }
  });

  $("#doing_nav").click(function(){
    $("#doing").fadeOut();
    $("#about").hide();
    $("#writing").hide();
    $("#building").hide();
    $("#hearts").hide();
    if ($( window ).width() < 668){
    $("#box1").animate({"width":"100%"}, 1250);
    $("#box1").animate({"width":"100%"}, 500, function(){
      $("#doing").fadeIn("fast");
    });
    }
    else {
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#doing").fadeIn("fast");
    });
    }
  });

  $("#writing_nav").click(function(){
    $("#writing").fadeOut();
    $("#about").hide();
    $("#building").hide();
    $("#doing").hide();
    $("#hearts").hide();
    if ($( window ).width() < 668){
    $("#box1").animate({"width":"100%"}, 1250);
    $("#box1").animate({"width":"100%"}, 500, function(){
      $("#writing").fadeIn("fast");
    });
    }
    else {
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#writing").fadeIn("fast");
    });
    }
  });

  $("#hearts_nav").click(function(){
    $("#hearts").fadeOut();
    $("#about").hide();
    $("#writing").hide();
    $("#doing").hide();
    $("#building").hide();
    if ($( window ).width() < 668){
    $("#box1").animate({"width":"100%"}, 1250);
    $("#box1").animate({"width":"100%"}, 500, function(){
      $("#hearts").fadeIn("fast");
    });
    }
    else {
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#hearts").fadeIn("fast");
    });
    }
  });

  $("#img_creds").click(function(){
    $("#about").fadeOut();
    $("#building").hide();
    $("#writing").hide();
    $("#doing").hide();
    $("#hearts").hide();
    if ($( window ).width() < 668){
    $("#box1").animate({"width":"100%"}, 1250);
    $("#box1").animate({"width":"100%"}, 500, function(){
      $("#about").fadeIn("fast");
    });
    }
    else {
    $("#box1").animate({"width":"0%"}, 1250);
    $("#box1").animate({"width":"79.5%"}, 500, function(){
      $("#about").fadeIn("fast");
    });
    }
  });

});
