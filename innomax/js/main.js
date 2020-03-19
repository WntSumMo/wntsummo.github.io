$(function () {

  // navbar**********************************
  let navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav__links');
    let navLinks = document.querySelectorAll('.nav__links li');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });

    $(document).mouseup(function (e) {
      let div = $(".nav");
      let nav = $(".nav__links");
      let burger = $('.burger');
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        nav.removeClass('nav-active');
        burger.removeClass('toggle');
      }
    });

  }

  navSlide();
  let app = () => {
    navSlide();
  }









  // banner slider*************************************
  $('.banner__slider').slick({
    prevArrow: "<button type='button' class='banner-prev'></button>",
    nextArrow: "<button type='button' class='banner-next'></button>",
    speed: 600,
    infinite: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
      }
    }]
  });


  // recommended product slider*************************
  $('.rec-pruduct__slider').slick({
    prevArrow: "<button type='button' class='rec-prev'></button>",
    nextArrow: "<button type='button' class='rec-next'></button>",
    slidesToShow: 4,
    infinite: true,
    speed: 600,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  // top product slider*************************
  $('.top-pruduct__slider').slick({
    prevArrow: "<button type='button' class='top-prev'></button>",
    nextArrow: "<button type='button' class='top-next'></button>",
    slidesToShow: 4,
    infinite: true,
    speed: 600,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  // related product slider*************************
  $('.rel-pruduct__slider').slick({
    prevArrow: "<button type='button' class='rel-prev'></button>",
    nextArrow: "<button type='button' class='rel-next'></button>",
    slidesToShow: 4,
    infinite: true,
    speed: 600,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  // our clients slider**********************
  $('.trust__slider').slick({
    prevArrow: "<button type='button' class='trust-prev'></button>",
    nextArrow: "<button type='button' class='trust-next'></button>",
    slidesToShow: 5,
    infinite: true,
    speed: 600,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      }
    }]
  });

  $('.product-card__slider-for').slick({
    slidesToShow: 1,
    infinite: true,
    speed: 600,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.product-card__slider'
  });
  $('.product-card__slider').slick({
    prevArrow: "<button type='button' class='product-card-prev'></button>",
    nextArrow: "<button type='button' class='product-card-next'></button>",
    slidesToShow: 4,
    infinite: true,
    speed: 600,
    arrows: true,
    asNavFor: '.product-card__slider-for',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 3,

      }
    }]
  });


  //  filter block*********************** 
  $(".filter-item").click(function () {
    $(this).toggleClass("filter-active");
  });

  $(".filter__size-item").click(function () {
    $(this).toggleClass("filter__size-active");
  });

  $(".filter__reset-btn").click(function () {
    $(".filter-item").removeClass("filter-active")
    $(".filter__size-item").removeClass("filter__size-active")
  });




  $.fn.followTo = function (pos) {
    var $this = this,
      $window = $(window);

    $window.scroll(function (e) {
      if ($window.scrollTop() > pos) {
        $this.css({
          position: 'fixed',
          bottom: '10%',
          visibility: 'visible',
          opacity: '1'
        });
      } else {
        $this.css({
          visibility: 'hidden',
          opacity: '1'
        });
      }
    });
  };

  $('.scroll-top').followTo(400);


  // tabs block
  let tab = function () {
    let tabNav = document.querySelectorAll('.specs-tabs__nav-item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

    tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
      tabNav.forEach(item => {
        item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
      tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      });
    }
  };

  tab();

  // popup********************************************
  $('.buy__btn').magnificPopup({
    type: 'inline',
    removalDelay: 300,
    closeBtnInside: true,
    fixedContentPos: true,
    showCloseBtn: true,
    closeOnContentClick: false,
    midClick: false,
    closeOnBgClick: true,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
  });





  // input mask****************************




});



window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }
  var len = 0;
  function mask(event) {
    var matrix = "+998 __ ___ ____",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) : a
    });
    i = this.value.indexOf("_");
    if (val.length < len) i = this.value.lastIndexOf(val.substr(-1)) + 1;
    if (i != -1) {
      i < 5 && (i = 3);
      this.value = this.value.slice(0, i);
    }
    if (event.type == "blur") {
      if (this.value.length < 5) this.value = ""
    } else setCursorPosition(this.value.length, this);
    len = val.length;
  };
  var input = document.querySelector("input[type='tel']");
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
});