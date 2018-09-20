const projects = [
	{
		name: "Bookkeeper",
		description: "Node application for finding or creating book clubs, organizing books into customized lists, and storing notes and quotes.",
		extraDescription: "Bookkeeper is a full stack node application which allows users to find or create book clubs with other users, organize books into customized lists, and store their notes and favorite quotes.\n \nAs an avid reader I am often doggearing pages with the intention of going back and recording the quote that stood out, or the thought that occurred while reading that page. Bookkeeper makes this easy, and keeps every note and quote organized per book. Users can also divide their books into lists, allowing them to show off their favorites, keep track of ones they'd like to read, or organize them any way they'd prefer.\n \nThis application also allows users to find other people who have read the books on their lists, and create online discussion groups.",
		image: '../images/projects/bookkeeper.png',
		images: ['../images/projects/bookkeeper.png', '../images/projects/bookkeeper1.png', '../images/projects/bookkeeper2.png', '../images/projects/bookkeeper3.png'],
		technologies: ["HTML5", "CSS", "Materialize", "JavaScript", "jQuery", "Node.js", "Express.js", "Postgresql", "Sequelize"],
		links: {
			github: 'https://github.com/kcsommers/project2-bookkeeper',
			live: 'https://bookkeeper212.herokuapp.com/'
		}
	},
	{
		name: "Good Market",
		description: "Full stack ecommerce site for buying and selling items, and donating portions of each sale to an organization of the user's choosing.",
		extraDescription: "Good Market is a full stack ecommerce site, developed with Python and Django, which allows users to post items for sale, select a charity or organization and decide how much of their profit to donate.\n \nMuch like Craigslist or OfferUp, Good Market can be used to buy or sell used items of all kinds. The difference being that Good Market also provides an easy way to donate a portion of the sale to a good cause. Sellers decide where the money goes and how much to give, and buyers know exactly where their money is going.\n \nThis is a functioning ecommerce site, utilizing Stripe's API as a registered platform which acts as a liason between buyers and sellers. Users can purchase items from their cart from multiple vendors at once, and funds will be transfered appropriately. The chosen donation percentage is deducted and stored on the Good Market platform, and tracked in the Charity model of our Postgres database.",
		image: '../images/projects/goodmarket.png',
		images: ['../images/projects/goodmarket.png', '../images/projects/goodmarket1.png', '../images/projects/goodmarket2.png', '../images/projects/goodmarket3.png'],
		technologies: ["HTML5", "CSS3", "jQuery", "Python", "Django", "Postgresql"],
		links: {
			github: 'https://github.com/kcsommers/goodmarket',
			live: 'https://good-market.herokuapp.com/'
		}
	},
	{
		name: "Star Stacker",
		description: "Two player front-end game, based on SEGA’s Columns, in which players match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.",
		extraDescription: "Based on SEGA’s Columns, this two player front end game requires players to match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.\n \nColumns was (and still is) one of my favorite video games, and I was very excited to be able to create my own spin on it using JavaScript and CSS Canvas. The goal is to move and match the stacks around the grid, surviving as long as you can before the pieces reach the top (much like Tetris). More points are scored if the disappearing pieces allow the ones above to drop again and create new matches.\n \nThere is a lot of logic to this game, and a lot of potential bugs. In order to track them down, I often had to use Chrome's developer tools to watch the JavaScript execute one step at a time. As one of the first projects I'd ever developed, I certainly grew a lot as a developer from the challenges this game presented. ",
		image: '../images/projects/starstacker.png',
		images: ['../images/projects/starstacker.png', '../images/projects/starstacker1.png', '../images/projects/starstacker2.png', '../images/projects/starstacker3.png'],
		technologies: ["HTML5", "CSS", "CSS Canvas", "JavaScript", "jQuery"],
		links: {
			github: 'https://github.com/kcsommers/project1-Columns',
			live: 'https://kcsommers.github.io/project1-Columns/'
		}
	},
	{
		name: "Musaic",
		description: "MERN stack application which allows users to create spotify playlists based on the mood of an uploaded photograph.",
		extraDescription: "Musaic is a MERN stack application which provides users a way to easily create a music playlist by simply taking a photograph.\n \nWhether a user is hiking through the woods, laying on the beach, working late or relaxing at home, Musaic will attempt to capture the mood of their setting, and utilize Spotify's wide range of song attributes to create a playlist to match. To acheive this, we developed a color to mood algorithm using the Hue, Saturation and Lightness values of the most dominant colors in the photograph. These values are converted into the attributes valence, energy, danceability and mode, which are then sent to the Spotify API.\n \nAs the app currently stands, in order to play the tracks the user's playlist is opened in Spotify. We hope to continue developing our application so that it supports the playing of audio without leaving the site.",
		image: '../images/projects/moodsic.png',
		images: ['../images/projects/moodsic.png', '../images/projects/moodsic1.png', '../images/projects/moodsic2.png'],
		technologies: ["React.js", "CSS", "Node.js", "Express.js", "MongoDB"],
		links: {
			github: 'https://github.com/kcsommers/project3',
			live: 'https://moodsic11.herokuapp.com/'
		}
	}
];

// Globals
var projectIndex = 0;
var projectImageIndex = 0;
var projectImageInterval;
var thumbnailActive = $('.thumbnail-active');
var currentPage = window.location.href.split('http://mkacysommers.com')[1];

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
  $('.page-lid').css({display: 'block'});
  $('nav').css({filter: 'blur(2px)'});
  $('main').css({filter: 'blur(2px)'});
  $('footer').css({filter: 'blur(2px)'});
  $('body').addClass('no-scroll');
};

const hideContact = function() {
  $('#contact-form').css({right: '-500px'});
  $('.page-lid').css({display: 'none'});
  $('nav').css({filter: 'none'});
  $('main').css({filter: 'none'});
  $('footer').css({filter: 'none'});
  $('body').removeClass('no-scroll');
}

// ******************************************* 
// project carousels
// *******************************************

// this function fills the project image carousel
const fillProjectImage = (project, i) => {
  let container = $('.project-display-top');
  container.children().first().fadeOut(800);
  let imgSrc = project.images[i];
  let img = $(`<img class="project-image" src=${imgSrc} alt=${project.name} />`);
  container.prepend(img)
  .fadeIn(800);
  // update active bullet
  $('.bullet-active').removeClass('bullet-active');
  $(`.bullet:eq(${i})`).addClass('bullet-active');
};

const startImageInterval = function(project, i) {
  clearInterval(projectImageInterval);
  projectImageInterval = setInterval(() => {
    i = (i === project.images.length - 1) ? 0 : i + 1;
    fillProjectImage(project, i);
  }, 5000);
};

const createProjectSlide = function(i, slide) {
  const project = projects[i];
  let slideWrapper = $(`<div class="carousel-wrapper ${slide} projects-flex"></div>`);
  let descriptionWrapper = $(`<div class="project-description-wrapper"></div>`);

  let title = $(`<h1 class="project-title">${project.name}</h1>`); 
  let techs = $('<p class="project-techs"></p>'); 
  let desc = $(`<p class="project-description">${project.description}</p>`);
  let githubLink = $(`<a class="project-github" href=${project.github}>Github</a>`);
  let liveLink = $(`<a class="project-live" href=${project.live}>Live Site</a>`);
  let readMoreLink = $(`<a class="project-read-more" href="/project/${i}">Read More</a>`);
  let links = $(`<div class="project-links"></div>`);
  links.append(readMoreLink, liveLink, githubLink);
  project.technologies.forEach((tech) => {
    let techSpan = $(`<span>${tech}, </span>`);
    techs.append(techSpan);
  });
  descriptionWrapper.append(title, techs, desc, links);

  let photos = $(`<div class="project-photos"></div>`);
  let photosCarousel = $(`<div class="carousel" id="project-photos-carousel"></div></div>`);
  let photosDisplay = $('<div class="carousel-wrapper project-display">');
  let displayTop = $('<div class="project-display-top"></div>');
  let displayBottom = $('<div class="project-display-bottom"></div>');
  let bulletsDiv = $('<div class="bullets"></div>');

  // add bullet for each project image
  // and attach click event listener
  project.images.forEach((image, index) => {
    let bulletSpan = $(`<span class="bullet">&bull;</span>`).data({index: index});
    if(index === 0) bulletSpan.addClass('bullet-active');
    bulletSpan.on('click', (e) => {
      projectImageIndex = index;
      fillProjectImage(project, bulletSpan.data('index'));
      startImageInterval(project, projectImageIndex);
    });
    bulletsDiv.append(bulletSpan);
  });

  let img = $(`<img class="project-image" src=${project.image} alt=${project.name} />`);
  displayTop.append(img);
  displayBottom.append(bulletsDiv);
  photosDisplay.append(displayTop, displayBottom);
  photosCarousel.append(photosDisplay);
  photos.append(photosCarousel);
  
  slideWrapper.append(descriptionWrapper, photos);
  return slideWrapper;
};

const addSlide = function(i, slide) {
  $('.project-thumbnail-wrapper img').unbind('click', handleThumbnailClick);
  $('.project-arrow').unbind('click', handleArrowClick);
  const project = projects[i];
  let carousel = $('#projects-carousel');
  carousel.append(createProjectSlide(i, slide));
  startImageInterval(project, projectImageIndex);

  let showClass = (i > projectIndex) ? 'show-left' : 'show-right';
  let hideClass = (i > projectIndex) ? 'hide-left' : 'hide-right';
  let current = $('.current-slide');
  let next = $('.next-slide');

  thumbnailActive.removeClass('thumbnail-active');
  let thumbnail = $(`.project-thumbnail-wrapper img:eq(${i})`);
  thumbnail.addClass('thumbnail-active');
  thumbnailActive = thumbnail;

  if(next.length) {
    current.addClass(hideClass).on('animationend', function(e) {
      $(this).remove();
      $('.project-thumbnail-wrapper img').bind('click', handleThumbnailClick);
      $('.project-arrow').bind('click', handleArrowClick);
    });
    next.addClass(showClass).on('animationend', function(e) {
      $(this).removeClass(showClass)
      .removeClass('next-slide')
      .addClass('current-slide');
    });
  }
  // set image display height once image loads
  $('.project-image').on('load', function() {
    $('.project-display-top').height($(this).height());
  });

  projectIndex = i;
};

const setElementHeights = function() {
  let projImgDisplay = $('.project-display-top');
  let projImgHeight = $('.project-image');
  projImgDisplay.height(projImgHeight.height());
};

const handleArrowClick = function(e) {
  let i;
  if($(e.target).is('#prev')) {
    i = (projectIndex === 0) ? projects.length - 1 : projectIndex - 1;
  }
  else {
    i = (projectIndex === projects.length - 1) ? 0 : projectIndex + 1;
  }
  addSlide(i, 'next-slide');
};

const handleThumbnailClick = function(e) {
  let i = Number($(e.target).attr('data-index'));
  addSlide(i, 'next-slide');
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

$(document).ready(function() {
  addSlide(0, 'current-slide');

  // ******************************************* 
  // events
  // *******************************************
  $(window).scroll((e) => {
    setNavHeight(currentPage);
  });

  $(window).resize(function(){
    setElementHeights();
  });

  $('.project-thumbnail-wrapper img').on('mouseover', function(e) {
    thumbnailActive.removeClass('thumbnail-active');
    $(this).addClass('thumbnail-active');
  });

  $('.project-thumbnail-wrapper img').on('mouseout', function(e) {
    $(this).removeClass('thumbnail-active');
    thumbnailActive.addClass('thumbnail-active');
  });

  $('.nav-link').on('click', handleNavClick);

  $('.project-thumbnail-wrapper img').on('click', handleThumbnailClick);

  $('.project-arrow').on('click', handleArrowClick);

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

  setNavHeight(currentPage);
});