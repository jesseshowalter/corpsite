// @codekit-prepend "vendors/jquery-3.1.1.min.js";
// @codekit-prepend "vendors/slick.js";
// @codekit-prepend "vendors/classie.js";
// @codekit-prepend "vendors/modernizr.custom.js";


$(document).ready(function(){

  // -------------------------------
  // vertical Tabs for Press and FAQ
  // -------------------------------
  $(".vertical-tab-content").hide();
  $(".vertical-tab-content:first").show();

  $(".vertical-tab").click(function(event) {
    event.preventDefault();

    $(".vertical-tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();

    $(".vertical-tab").removeClass("sideNavActive");
    $(this).addClass("sideNavActive");
  });

  // -------------------------------
  // Slider
  // -------------------------------
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 6500,
    pauseOnHover: true,
    arrows: false,
  });
  $('.flyerSlider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 6500,
    pauseOnHover: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });


 // --------------------------------------------
 //  Back To Top
 // --------------------------------------------
 //Click event to scroll to top
 $('.vertical-tab').click(function(){
   $('html, body').animate({scrollTop : 0},800);
   return false;
 });



 // -------------------------------
 // Mobile Navigation
 // -------------------------------
 (function() {
  var triggerBttn = document.getElementById( 'nav-toggle-switch' ),
    overlay = document.querySelector( 'div.overlay' ),
    closeBttn = overlay.querySelector( 'button.overlay-close' );
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = { transitions : Modernizr.csstransitions };

  function toggleOverlay() {
    if( classie.has( overlay, 'open' ) ) {
      classie.remove( overlay, 'open' );
      classie.add( overlay, 'close' );
      var onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if( ev.propertyName !== 'visibility' ) return;
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }
        classie.remove( overlay, 'close' );
      };
      if( support.transitions ) {
        overlay.addEventListener( transEndEventName, onEndTransitionFn );
      }
      else {
        onEndTransitionFn();
      }
    }
    else if( !classie.has( overlay, 'close' ) ) {
      classie.add( overlay, 'open' );
    }
  }

  triggerBttn.addEventListener( 'click', toggleOverlay );
  closeBttn.addEventListener( 'click', toggleOverlay );
 })();



});
