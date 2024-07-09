(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /*
     * ----------------------------------------------------------------------------------------
     *  PRELOADER JS
     * ----------------------------------------------------------------------------------------
     */
    jQuery(window).on("load", function () {
      $(".preloader").delay(1600).fadeOut("slow");
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  CHANGE MENU BACKGROUND JS
     * ----------------------------------------------------------------------------------------
     */
    var headertopoption = $(window);
    var headTop = $(".header-top-area");

    headertopoption.on("scroll", function () {
      if (headertopoption.scrollTop() > 50) {
        headTop.addClass("menu-bg");
      } else {
        headTop.removeClass("menu-bg");
      }
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */

    $("a.smoth-scroll").on("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 50,
          },
          1000
        );
      e.preventDefault();
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  MAGNIFIC POPUP JS
     * ----------------------------------------------------------------------------------------
     */

    $(".video-play").magnificPopup({
      type: "iframe",
    });

    var magnifPopup = function () {
      $(".work-popup").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-with-zoom",
        gallery: {
          enabled: true,
        },
        zoom: {
          enabled: true,

          duration: 300,
          easing: "ease-in-out",
          opener: function (openerElement) {
            return openerElement.is("img")
              ? openerElement
              : openerElement.find("img");
          },
        },
      });
    };
    // Call the functions
    magnifPopup();
    /*
     * ----------------------------------------------------------------------------------------
     *  EXTRA JS
     * ----------------------------------------------------------------------------------------
     */
    $(document).on("click", ".navbar-collapse.in", function (e) {
      if (
        $(e.target).is("a") &&
        $(e.target).attr("class") != "dropdown-toggle"
      ) {
        $(this).collapse("hide");
      }
    });
    $("body").scrollspy({
      target: ".navbar-collapse",
      offset: 195,
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  SCROOL TO UP JS
     * ----------------------------------------------------------------------------------------
     */
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 250) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    });
    $(".scrollup").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  WOW JS
     * ----------------------------------------------------------------------------------------
     */
    new WOW().init();
  });
})(jQuery);

function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sohrabhossain5031@gmail.com",
    Password: "1BE780FEB16BEFB8CBA6A60989619B9C5908",
    To: "buraqflybd@gmail.com",
    From: "sohrabhossain5031@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
