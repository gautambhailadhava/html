// for a footer hight

function adj_fhight() {
  var fhight = $(".footer").height();
  console.log(fhight);
  $(".wrapper").css("padding-bottom", fhight);
  $(".footer").css("margin-top", -fhight);
}
// for header height

function adj_hhight() {
  var hhight = $(".header").height();
  console.log(hhight);
  $(".main-wrapper").css("padding-top", hhight);
}

$(document).ready(function () {
  $(".primary-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
  });

  $(".secondary-carousel").owlCarousel({
    loop: true,
    nav: true,
    stagePadding: 150,
    margin: 25,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      400: {
        items: 2,
        stagePadding: 0,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  });
  adj_fhight();
  adj_hhight();
  $("#dropkick").dropkick({
    mobile: true,
  });

  $("#dropkick1").dropkick({
    mobile: true,
  });

  $("#dropkick2").dropkick({
    mobile: true,
  });

  $(".hamburger-icon").click(function () {
    $("body,html").toggleClass("openmenu");
  });

  $(".accordion-heading").click(function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass("active");
    $(".accordion-contents").not($(this).next()).slideUp(200);
    $(this).siblings().removeClass("active");
  });
  
});
$(window).resize(function () {
  adj_fhight();
  adj_hhight();
});
