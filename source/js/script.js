// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (modalForm.classList.contains("modal-show")) {
//       evt.preventDefault();
//       modalForm.classList.remove("modal-show");
//       overlay.classList.remove("modal-show");
//     }
//     if (modalFormDone.classList.contains("modal-show")) {
//       evt.preventDefault();
//       modalFormDone.classList.remove("modal-show");
//       overlay.classList.remove("modal-show");
//     }
//     if (modalRecall.classList.contains("modal-show")) {
//       evt.preventDefault();
//       modalRecall.classList.remove("modal-show");
//       overlay.classList.remove("modal-show");
//     }
//   }
// });

$(document).ready(function() {
  $('.main-nav__toggle').on('click', function(e) {
    e.preventDefault();
    $('.main-nav').toggleClass('main-nav--closed');
    $('.main-nav').toggleClass('main-nav--opened');
  });

  $('.promo__btn, .product__call-btn, .example__btn, .main-nav__service-call').on('click', function(e) {
    e.preventDefault();
    $(".modal-form, .modal-overlay").addClass("modal-show");
  });

  $('.contact__btn, .about-us__btn').on('click', function(e) {
    e.preventDefault();
    $(".modal-recall, .modal-overlay").addClass("modal-show");
  });

  $('.recall__btn').on('click', function(e) {
    e.preventDefault();
    $(".modal-form-done, .modal-overlay").addClass("modal-show");
  });

  $('.close-btn').on('click', function(e) {
    e.preventDefault();
    $(".modal-form-done, .modal-recall, .modal-form, .modal-overlay").removeClass("modal-show");
  });

  $('.js-btn-1').on('click', function(e) {
    e.preventDefault();
    $(".product__brand-link").removeClass("product__brand-link--curent");
    $(this).addClass("product__brand-link--curent");
    $(".product__type-link").removeClass("product__type-link--curent");
    $(".js-btn-3").addClass("product__type-link--curent");
    $(".product__slider").hide();
    $(".product__slider1").show();
    $('.product__list').slick('destroy');
    $('.js-slider-1').slick('reinit');
  });

  $('.js-btn-2').on('click', function(e) {
    e.preventDefault();
    $(".product__brand-link").removeClass("product__brand-link--curent");
    $(this).addClass("product__brand-link--curent");
    $(".product__type-link").removeClass("product__type-link--curent");
    $(".js-btn-3").addClass("product__type-link--curent");
    $(".product__slider").hide();
    $(".product__slider3").show();
    $('.product__list').slick('destroy');
    $('.js-slider-3').slick('reinit');
  });

  $('.js-btn-3').on('click', function(e) {
    e.preventDefault();
    $(".product__type-link").removeClass("product__type-link--curent");
    $(this).addClass("product__type-link--curent");
    $(".product__slider").hide();
    if ($('.js-btn-1').hasClass('product__brand-link--curent')) {
      $(".product__slider1").show();
      $('.product__list').slick('destroy');
      $('.js-slider-1').slick('reinit');
    } else {
      $(".product__slider3").show();
      $('.product__list').slick('destroy');
      $('.js-slider-3').slick('reinit');
    }
  });

  $('.js-btn-4').on('click', function(e) {
    e.preventDefault();
    $(".product__type-link").removeClass("product__type-link--curent");
    $(this).addClass("product__type-link--curent");
    $(".product__slider").hide();
    if ($('.js-btn-1').hasClass('product__brand-link--curent')) {
      $(".product__slider2").show();
      $('.product__list').slick('destroy');
      $('.js-slider-2').slick('reinit');
    } else {
      $(".product__slider4").show();
      $('.product__list').slick('destroy');
      $('.js-slider-4').slick('reinit');
    }
  });

  $('.example__list').slick();

  $('.js-slider-1').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
      }
    ]
  });

  $('.js-slider-2').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
      }
    ]
  });

  $('.js-slider-3').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
      }
    ]
  });

  $('.js-slider-4').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
      }
    ]
  });

});
