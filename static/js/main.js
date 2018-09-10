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


$(document).ready(function() {
  // ******************************************* 
  // global variables
  // *******************************************
  var currentPage = window.location.href.split('http://localhost:3000')[1];
  console.log(currentPage)

  // ******************************************* 
  // project carousels
  // *******************************************
  // Globals
  var projectIndex = 0;
  var projectImageIndex = 0;
  var projectImageInterval;

  // this function fills the project image carousel
  const fillProjectImage = (project, i) => {
    let container = $('#project-display-top');
    container.children().first().remove();
    let imgSrc = project.images[i];
    container.append(`<img id="project-image" src=${imgSrc} alt=${project.name} />`)
    .hide().fadeIn(500);
  };

  const startImageInterval = function(project, i) {
    clearInterval(projectImageInterval);
    projectImageInterval = setInterval(() => {
      i = (i === project.images.length - 1) ? 0 : i + 1;
      fillProjectImage(project, i);
    }, 5000);
  };

  // This function loads the project carousel
  const fillProject = function(i) {
    let project = projects[i];
    let projectDiv = $('#projects-section');
    let title = projectDiv.find('#project-title'); 
    let techs = projectDiv.find('#project-techs'); 
    let desc = projectDiv.find('#project-description'); 
    let github = projectDiv.find('#project-github');
    let live = projectDiv.find('#project-live');
    let bullets = projectDiv.find('#project-display-bottom #bullets');
    let readMore = projectDiv.find('#project-read-more');

    title.text(project.name);
    techs.text('');
    project.technologies.forEach((tech) => {
      let techSpan = $(`<span>${tech}, </span>`);
      techs.append(techSpan);
    });
    desc.text(project.description);
    github.attr('href', project.links.github);
    live.attr('href', project.links.live);
    bullets.text('');

    // add bullet for each project image
    // and attach click event listener
    project.images.forEach((image, i) => {
      let bulletSpan = $(`<span class="bullet">&bull;</span>`).data({index: i});
      bulletSpan.on('click', (e) => {
        projectImageIndex = i;
        fillProjectImage(project, bulletSpan.data('index'));
        startImageInterval(project, projectImageIndex);
      });
      bullets.append(bulletSpan);
    });
    readMore.attr('href', `/project/${i}`);

    fillProjectImage(project, 0);
    startImageInterval(project, projectImageIndex);
  };
  fillProject(projectIndex);

  ////// PROJECT NAVIGATION
  $('.project-arrow').click((e) => {
    if($(this).is('#prev')){
      projectIndex = (projectIndex === 0) ? projects.length - 1 : projectIndex - 1;
    }
    else {
      projectIndex = (projectIndex === projects.length - 1) ? 0 : projectIndex + 1;
    }
    fillProject(projectIndex);
  });
  /////////

  // ******************************************* 

  // *******************************************

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
    $('body').css({overflowY: 'hidden'});
    $('.page-lid').css({display: 'block'});
    $('nav').css({filter: 'blur(2px)'});
    $('main').css({filter: 'blur(2px)'});
    $('footer').css({filter: 'blur(2px)'});
  };

  const hideContact = function() {
    $('#contact-form').css({right: '-500px'});
    $('body').css({overflowY: 'initial'});
    $('.page-lid').css({display: 'none'});
    $('nav').css({filter: 'none'});
    $('main').css({filter: 'none'});
    $('footer').css({filter: 'none'});
  }

  // ******************************************* 
  // events
  // *******************************************
  $(window).scroll((e) => {
    setNavHeight(currentPage);
  });

  $('.nav-link').click(function(e) {
    if($(this).is('#resume-link')) {
      e.preventDefault();
      let page = $(this).attr('href');
      window.location = page;
    }
    else if($(this).is('#contact-link')) {
      e.preventDefault();
      showContact();
    }
    else {
      if(currentPage === '/' || currentPage === '/#about-section' || currentPage === '/#projects-section') {
        e.preventDefault();
        const about = document.getElementById($(this).attr('href').split('/#')[1]);
        about.scrollIntoView({behavior: 'smooth'});
      }
    }
  });

  $('.contact-link').click(function(e) {
    showContact();
  });

  $('.page-lid').click(function(e) {
    hideContact();
  });
  setNavHeight(currentPage);
});