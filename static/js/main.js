$(document).ready(function() {
  const setNavHeight = () => {
    const navbar = $('#nav-wrapper');
    if($(window).scrollTop() > 0) {
      navbar.css({height: '70px', backgroundColor: '#ddeaf0'});
    }
    else {
      navbar.css({height: '100px', backgroundColor: 'rgba(0,0,0,0)'});
    }
  };

  $(window).scroll((e) => {
    setNavHeight();
  });

  $('.contact-link').click((e) => {
    e.preventDefault();
    e.stopPropagation();
    $('#contact-form').css({right: 0});
    $('body').css({overflowY: 'hidden'});
    $('.page-lid').css({display: 'block'});
    $('nav').css({filter: 'blur(2px)'});
    $('main').css({filter: 'blur(2px)'});
    $('footer').css({filter: 'blur(2px)'});
  });

  $('.page-lid').click((e) => {
    $('#contact-form').css({right: '-500px'});
    $('body').css({overflowY: 'initial'});
    $('.page-lid').css({display: 'none'});
    $('nav').css({filter: 'none'});
    $('main').css({filter: 'none'});
    $('footer').css({filter: 'none'});
  });
});