$(document).ready(function () {

  $('.lang').ddslick({
    border: "none",
    width: 100,
    onSelected: function (selectedData) {

    }

  });

  $('.currency').ddslick({
    width: 70,
    onSelected: function (selectedData) {

    }

  });

  $('.blog__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: '<button type="button" class="slick-btn slick-next"><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><i class="fas fa-chevron-left"></i></button>',
  });



  // tabs block
  let tab = function () {
    let tabNav = document.querySelectorAll('.products__tabs-nav__item'),
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


  
  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });


});
