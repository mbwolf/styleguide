(function($){

/* @todo: This is a test */

  var
    windowHeight,
    isAnimating = false;

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Detects height of nav, if nav is taller than the window
  // change positioning to absolute so it will scroll with window
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function updateNavPositioning(){
    if(windowHeight < 900){
      $("#nav").css("position","absolute");
    } else {
      $("#nav").css("position","fixed");
    }
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Animates window scrolling when user clicks a specific section
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function jumpToSection(hash, target){

    if(isAnimating) return;

    isAnimating = true;

    $('html,body').animate({
      scrollTop: target.offset().top
    }, 800);

    setTimeout(function(){
      location.href = hash;
      isAnimating = false;
    }, 800);

  }


  // DOM Ready
  $(function(){

    var $navItem = $("#nav a");

    windowHeight = $(window).height();

    $(window).on("resize", function(){
      windowHeight = $(window).height();
      updateNavPositioning();
    });

    $navItem.on("click", function(e){
      e.preventDefault();

      var
        selectionHash = $(this).attr("href"),
        selection = selectionHash.substr(1),
        $target = $("a[name=" + selection + "]");

      jumpToSection(selectionHash, $target);

    });

  });

})(jQuery);
