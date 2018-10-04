
var currentPage = window.location.href.split('http://www.mkacysommers.com')[1];

const setNavHeight = function(page) {
  const navbar = $('#nav-wrapper');
  if($(window).scrollTop() > 0 || page === '/resume') {
    navbar.css({height: '70px', backgroundColor: '#ddeaf0'});
  }
  else {
    navbar.css({height: '100px', backgroundColor: 'rgba(0,0,0,0)'});
  }
};

const showContact = function() {
  $('#contact-form').css({right: 0});
  $('.page-lid').css({zIndex: 1100, opacity: 1});
  $('body').addClass('no-scroll');
  $('html').addClass('no-scroll');
};

const hideContact = function() {
  $('#contact-form').css({right: '-500px'});
  $('.page-lid').css({zIndex: -1100, opacity: 0});
  $('body').removeClass('no-scroll');
  $('html').removeClass('no-scroll');
}

const setElementHeights = function() {
  let projImgDisplay = $('.project-display-top');
  let projImgHeight = $('.project-image');
  projImgDisplay.height(projImgHeight.height());
};

const handleBurgerClick = function(e) {
  e.preventDefault();
  $('#mobile-nav').toggleClass('hide-mobile-nav');
  $('body').toggleClass('no-scroll');
  $('html').toggleClass('no-scroll');
  $('#nav-burger i').toggleClass('fa-times');
};  

const handleNavClick = function(e) {
  if($(e.target).hasClass('mobile-nav-link')) {
    handleBurgerClick(e);
  }

  let page = $(e.target).attr('href');
  
  if($(e.target).is('#resume-link')) {
    e.preventDefault();
    window.location = page;
  }
  else if($(e.target).is('#contact-link')) {
    e.preventDefault();
    showContact();
  }
  else {
    if(currentPage === '/' || currentPage === '/#about-section' || currentPage === '/#projects-section') {
      e.preventDefault();
      const section = document.getElementById($(e.target).attr('href').split('/#')[1]);
      let top = ($(e.target).attr('href') === '/') ? 0 : $(section).offset().top - 70;
      window.scroll({top, left: 0, behavior: 'smooth'});
    }
    else {
      window.location = page;
    }
  }
}

let resumeWidth = 100;
const handleZoom = function(e) {
  const target = $(e.target);
  const resume = $('#resume img');
  if((target.is('#zoom-in') || target.is('#zoom-in i')) && resumeWidth < 200) {
    resumeWidth += 25;
  }
  else if((target.is('#zoom-out') || target.is('#zoom-out i')) && resumeWidth > 50) {
    resumeWidth -= 25;
  }
  resume.css({width: `${resumeWidth}%`})
};

$(document).ready(function() {
  $(window).scroll((e) => {
    setNavHeight(currentPage);
  });

  $(window).resize(function(){
    setElementHeights();
  });

  $('.nav-link').on('click', handleNavClick);

  $('.contact-link').click(showContact);

  $('.page-lid').click(hideContact);

  $('#nav-burger').on('click', handleBurgerClick);

  $('#joni-span').on('mouseover', function(e) {
    $('#about-photo img').attr('src', '../images/joni.jpg');
    $('#about-photo img').attr('alt', 'Joni Blue');
  });

  $('#joni-span').on('mouseout', function(e) {
    $('#about-photo img').attr('src', '../images/about_background.jpg');
    $('#about-photo img').attr('alt', 'M Kacy Sommers');
  });

  $('.zoom').on('click', function(e){handleZoom(e)});

  setNavHeight(currentPage);
});