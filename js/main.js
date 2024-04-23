$(document).ready(function () {
  $(".hero-wrappper").slick({
    dots: true,
    arrows: true,
    nextArrow: '<i class="fas fa-arrow-circle-right slick-next"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left slick-prev"></i>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".scroll-to-bottom").on("click", function () {
    $("html, body").animate({ scrollTop: $("body").height() }, "slow");
  });
});
