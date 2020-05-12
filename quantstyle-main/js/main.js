$(function () {

  AOS.init({
    // Global settings:
    once: true,
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
    disable: 'mobile'
  });

  $('.logo')




  // language select********************************************
  $('#lang').ddslick({
    width: "auto",
    onSelected: function (selectedData) {
    }
  });



  //  hamburger**********************************************
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
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 20 + 0.2}s`;
        }
      });
      // burger animation
      burger.classList.toggle('toggle');

    });

    $(document).mouseup(function (e) {
      let div = $(".header-navigation");
      let nav = $(".nav-links");
      let burger = $('.burger');
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        nav.removeClass('nav-active');
        burger.removeClass('toggle');
        navLinks.forEach((link, index) => {
          link.style.animation = '';
        });
      }

    });

  }

  navSlide();

  let app = () => {
    navSlide();
  }






  // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header-navigation').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header-navigation').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header-navigation').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}












});