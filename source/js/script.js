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
    $('.product__list').slick('unslick');
    $('.js-slider-1').slick(options);
  });

  $('.js-btn-2').on('click', function(e) {
    e.preventDefault();
    $(".product__brand-link").removeClass("product__brand-link--curent");
    $(this).addClass("product__brand-link--curent");
    $(".product__type-link").removeClass("product__type-link--curent");
    $(".js-btn-3").addClass("product__type-link--curent");
    $(".product__slider").hide();
    $(".product__slider3").show();
    $('.product__list').slick('unslick');
    $('.js-slider-3').slick(options);
  });

  $('.js-btn-3').on('click', function(e) {
    e.preventDefault();
    $(".product__type-link").removeClass("product__type-link--curent");
    $(this).addClass("product__type-link--curent");
    $(".product__slider").hide();
    $('.product__list').slick('unslick');
    if ($('.js-btn-1').hasClass('product__brand-link--curent')) {
      $(".product__slider1").show();
      $('.js-slider-1').slick(options);
    } else {
      $(".product__slider3").show();
      $('.js-slider-3').slick(options);
    }
  });

  $('.js-btn-4').on('click', function(e) {
    e.preventDefault();
    $(".product__type-link").removeClass("product__type-link--curent");
    $(this).addClass("product__type-link--curent");
    $(".product__slider").hide();
    $('.product__list').slick('unslick');
    if ($('.js-btn-1').hasClass('product__brand-link--curent')) {
      $(".product__slider2").show();
      $('.js-slider-2').slick(options);
    } else {
      $(".product__slider4").show();
      $('.js-slider-4').slick(options);
    }
  });

  $(window).resize(function() {

    var width = $(window).width();
    if (width < 768) {
      $('.how-it-work__slider-controls').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.how-it-work__slider-list',
        dots: false,
        focusOnSelect: true,
        infinite: false
      });

      $('.how-it-work__slider-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.how-it-work__slider-controls'
      });
    } else {
      $('.how-it-work__slider-list').slick('unslick');
      $('.how-it-work__slider-controls').slick('unslick');
    }
  });

  $("#mobile, #mobile1, #phone-number").on({
    focus: function() {
      if (this.value === '') this.value = '+38 ';
    },
    blur: function() {
      if (this.value === '+38 ') this.value = '';
    }
  });

  $('#mobile, #mobile1, #phone-number').mask('+38 000 000 00 00');

  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();

    if ($(document).width() < 1024) {
      $('.main-nav').addClass('main-nav--closed');
      $('.main-nav').removeClass('main-nav--opened');

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    }
  });

  $('.example__list').slick();

  var options = {
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [{
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
  }

  $('.js-slider-1').slick(options);
  $('.js-slider-2').slick(options);
  $('.js-slider-3').slick(options);
  $('.js-slider-4').slick(options);

  function initMap() {
    var mapOptions = {
      zoom: 17,
      scrollwheel: false,
      fullscreenControl: false,
      mapTypeControl:false,
      streetViewControl:false,
      center: new google.maps.LatLng(50.412163,30.516648),
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(50.412163,30.516648),
      map: map,
      title: 'Vikna',
      animation: google.maps.Animation.DROP
    });
  };

  $(window).on('load', function() {
    $('#map').length && initMap();
  });
});
