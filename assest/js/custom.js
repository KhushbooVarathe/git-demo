$(function ($) {
    $(".mobile_btn").on("click", function () {
      $(".main_menu").slideToggle();
      $(".mobile_btn i").toggleClass("fa-xmark fa-xl");
    });
  
    if ($(window).width() < 992) {
      $(".main_menu  ul li a").on("click", function () {
        $(this)
          .parent(".has_dropdown")
          .children(".sub_menu")
          //.css({ "padding-left": "15px" })
          .stop()
          .slideToggle();
  
        $(this)
          .parent(".has_dropdown")
          .children("a")
          .find(".fa-angle-right")
          .stop()
          .toggleClass("fa-rotate-90");
      });
    }
  });



  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });


var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});