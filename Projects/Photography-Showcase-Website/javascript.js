/*global $, jQuery, console, alert, prompt */
$(function() {
    "use strict";
    // All Variable ==========================================================================
    var parallex = $(".parent > .parallex");
    // Scroll ================================================================================
  
    $(window).on('scroll', function() {
      parallex.css({
        "transform": "translate(0, " + $(window).scrollTop() + "px)"
      });
      if ($('.parent > div').offset.top() >= $(window).scrollTop()) {
        parallex = $(".parent > .parallex, .parent > div");
      }
    });
  
  });
  
  // https://codepen.io/anon/pen/XRYrPz?editors=0110