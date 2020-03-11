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

  }

  navSlide();

  let app = () => {
    navSlide();
  }





 

// // navbar shrink
//   window.onscroll = function () { scrollFunction() };

//   function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       document.getElementById("logo").style.paddingTop = "5px";
//       document.getElementById("logo").style.paddingBottom = "5px";
//       $(".logo-img").css('width', '90%');
//       $(".header__nav-link").css('fontSize', '16px');
//     } else {
//       document.getElementById("logo").style.paddingTop = "20px";
//       document.getElementById("logo").style.paddingBottom = "20px";
//       $(".logo-img").css('width', 'auto');
//       $(".header__nav-link").css('fontSize', '21px');
//     }
//   }

//  // smooth anchor scrolling***********************************
//  var navHeight = $('.header-navigation').height();
//  $(document).on('click', 'a[href^="#"]', function (event) {
//    event.preventDefault();

//    $('html, body').animate({
//      scrollTop: $($.attr(this, 'href')).offset().top - ( navHeight )
//    }, 1200);
//  });



});