// @codekit-prepend "vendors/jquery-3.1.1.min.js";
// @codekit-prepend "vendors/slick.js";


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

  // -------------------------------
  // Mobile Navigation
  // -------------------------------
  (function () {
    var toggle = document.getElementById('header-nav-toggle'),
        nav = document.getElementById('navMenu');

    // If JavaScript Is Enabled
    // Modify Initial States
    toggle.className = 'is-hidden';
    nav.className = 'is-visable';

    // Change Visibility On Click
    toggle.addEventListener('click', function() {
      if (nav.className === 'is-hidden') {
        nav.className = '';
      } else {
        nav.className = 'is-hidden';
      }
    })
  })();

 // --------------------------------------------
 //  Back To Top
 // --------------------------------------------
 //Click event to scroll to top
 $('.scrollToTop').click(function(){
   $('html, body').animate({scrollTop : 0},800);
   return false;
 });



});
