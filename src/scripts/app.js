// @codekit-prepend "vendors/jquery-3.1.1.min.js";

$(document).ready(function(){


  // vertical Tabs for Press and FAQ
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


});
