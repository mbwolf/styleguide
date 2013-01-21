(function($){

  $(function(){

    var
      $topBtn = $("#top-btn"),
      windowHeight = $(window).height(),
      windowPosition;

    $(window).scroll(function(){
      windowPosition = $(window).scrollTop();
      //updateTopBtn(windowPosition);
    });

    $(window).on("resize", function(){
      windowHeight = $(window).height();
      updateNavPositioning();
    });

    // var updateTopBtn = function(windowPosition){
    //   if(windowPosition > 50){
    //     $topBtn.animate({
    //       bottom: 0,
    //       opacity: 1
    //     }, 400);
    //   } else if(windowPosition === 0) {
    //     $topBtn.animate({
    //       bottom: -40,
    //       opacity: 0
    //     }, 400);
    //   }
    // };

    var updateNavPositioning = function(){
      if(windowHeight < 950){
        $("#nav").css("position","absolute");
      } else {
        $("#nav").css("position","fixed");
      }
    }

    $topBtn.on("click", function(e){
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $("body").offset().top
      }, 800);
    });

  });

})(jQuery);