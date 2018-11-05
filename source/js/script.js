// Открытие и закрыте Меню

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var service = document.querySelector('.main-nav__service');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// Открытие и закрытие Модальных окон.

var promo__btn = document.querySelector(".promo__btn");
var recall__btn = document.querySelector(".recall__btn");
var product__callBtn = document.querySelector(".product__call-btn");
var aboutUs__btn = document.querySelector(".about-us__btn");
var example__btn = document.querySelector(".about-us__btn");
var example__btn = document.querySelector(".example__btn");
var contact__btn = document.querySelector(".contact__btn");

var modalForm = document.querySelector(".modal-form");
var modalFormDone = document.querySelector(".modal-form-done");
var modalRecall = document.querySelector(".modal-recall");
var overlay = document.querySelector(".modal-overlay");

var modalFormClose = document.querySelector(".modal-form .close-btn");
var modalFormDoneClose = document.querySelector(".modal-form-done .close-btn");
var modalRecallClose = document.querySelector(".modal-recall .close-btn");

if (promo__btn) {
  promo__btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });
}

if (recall__btn) {
  recall__btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFormDone.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });
}

if (product__callBtn) {
  product__callBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });
}

if (example__btn) {
  example__btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });
}

modalFormDoneClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFormDone.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

modalFormClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

modalRecallClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalRecall.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalForm.classList.contains("modal-show")) {
      evt.preventDefault();
      modalForm.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
    if (modalFormDone.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFormDone.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
    if (modalRecall.classList.contains("modal-show")) {
      evt.preventDefault();
      modalRecall.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});
