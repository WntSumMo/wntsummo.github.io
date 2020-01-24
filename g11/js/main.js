$(function () {

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  let navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
      // toggle nav
      nav.classList.toggle('nav-active');

      // animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
      // burger animation
      burger.classList.toggle('toggle');

    });

  }

  navSlide();

  let app = () => {
    navSlide();
  }

  // tabs block
  let tab = function () {
    let tabNav = document.querySelectorAll('.portfolio__tabs-nav__item'),
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



// slider

  $(".portfolio__content").slick({
    rows: 2,
    slidesToShow: 3,
    touchMove: true,
    swipe: true,
    arrows: false,
    lazyLoad: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
      }
    }]
  });

  $(".slider-next").on('mouseenter', function(){
      $(".portfolio__content").slick('slickNext');
  });
  $(".slider-prev").on('mouseenter', function(){
      $(".portfolio__content").slick('slickPrev');
  });

  $('.portfolio__content').click(function() {
    $('.portfolio__content').slick('slickPause');
  });
  $('.portfolio__content').on("tap", function() {
    $('.portfolio__content').slick('slickPause');
  });

  // gallery 
  $('.lightzoom').lightzoom({
    speed: 400, 
    viewTitle: true,
    isOverlayClickClosing: true,
    isWindowClickClosing: true,
  });



});