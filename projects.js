const projects = [
	{
		name: "Bookkeeper",
		description: "Node application for finding or creating book clubs, organizing books into customized lists, and storing notes and quotes.",
		extraDescription: "Bookkeeper is a full stack node application which allows users to find or create book clubs with other users, organize books into customized lists, and store their notes and favorite quotes.\n \nAs an avid reader I am often doggearing pages with the intention of going back and recording the quote that stood out, or the thought that occurred while reading that page. Bookkeeper makes this easy, and keeps every note and quote organized per book. Users can also divide their books into lists, allowing them to show off their favorites, keep track of ones they'd like to read, or organize them any way they'd prefer.\n \nThis application also allows users to find other people who have read the books on their lists, and create online discussion groups.",
    imagesLg: ['../images/projects/bookkeeper/large/bookkeeper.jpg', '../images/projects/bookkeeper/large/bookkeeper1.jpg', '../images/projects/bookkeeper/large/bookkeeper2.jpg', '../images/projects/bookkeeper/large/bookkeeper3.jpg', '../images/projects/bookkeeper/large/bookkeeper4.jpg', '../images/projects/bookkeeper/large/bookkeeper5.jpg', '../images/projects/bookkeeper/large/bookkeeper6.jpg', '../images/projects/bookkeeper/large/bookkeeper7.jpg'],
    imagesSm: ['../images/projects/bookkeeper/small/bookkeeper.jpg', '../images/projects/bookkeeper/small/bookkeeper1.jpg', '../images/projects/bookkeeper/small/bookkeeper2.jpg', '../images/projects/bookkeeper/small/bookkeeper3.jpg', '../images/projects/bookkeeper/small/bookkeeper4.jpg', '../images/projects/bookkeeper/small/bookkeeper5.jpg', '../images/projects/bookkeeper/small/bookkeeper6.jpg', '../images/projects/bookkeeper/small/bookkeeper7.jpg'],
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
    imagesLg: ['../images/projects/good_market/large/goodmarket.jpg', '../images/projects/good_market/large/goodmarket1.jpg', '../images/projects/good_market/large/goodmarket2.jpg', '../images/projects/good_market/large/goodmarket3.jpg',
    '../images/projects/good_market/large/goodmarket4.jpg',
    '../images/projects/good_market/large/goodmarket5.jpg'],
    imagesSm: ['../images/projects/good_market/small/goodmarket.jpg', '../images/projects/good_market/small/goodmarket1.jpg', '../images/projects/good_market/small/goodmarket2.jpg', '../images/projects/good_market/small/goodmarket3.jpg', '../images/projects/good_market/small/goodmarket4.jpg', '../images/projects/good_market/small/goodmarket5.jpg'],
		technologies: ["HTML5", "CSS3", "jQuery", "Python", "Django", "Postgresql"],
		links: {
			github: 'https://github.com/kcsommers/goodmarket',
			live: 'https://good-market.herokuapp.com/'
		}
  },
  {
    name: "Lo Wolf Music",
    description: "Website for singer-songwriter Lo Wolf, with a store for purchasing digital tracks and hard copies, and an admin page for logging transactions, adding shows and keeping track of new subscribers.",
    extraDescription: "Based on SEGA’s Columns, this two player front end game requires players to match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.\n \nColumns was (and still is) one of my favorite video games, and I was very excited to be able to create my own spin on it using JavaScript and CSS Canvas. The goal is to move and match the stacks around the grid, surviving as long as you can before the pieces reach the top (much like Tetris). More points are scored if the disappearing pieces allow the ones above to drop again and create new matches.\n \nThere is a lot of logic to this game, and a lot of potential bugs. In order to track them down, I often had to use Chrome's developer tools to watch the JavaScript execute one step at a time. As one of the first projects I'd ever developed, I certainly grew a lot as a developer from the challenges this game presented.",
    imagesLg: ['../images/projects/lowolf/large/lowolf.jpg', '../images/projects/lowolf/large/lowolf1.jpg', '../images/projects/lowolf/large/lowolf2.jpg', '../images/projects/lowolf/large/lowolf3.jpg', '../images/projects/lowolf/large/lowolf4.jpg', '../images/projects/lowolf/large/lowolf5.jpg', '../images/projects/lowolf/large/lowolf6.jpg'],
    imagesSm: ['../images/projects/lowolf/small/lowolf.jpg', '../images/projects/lowolf/small/lowolf1.jpg', '../images/projects/lowolf/small/lowolf2.jpg', '../images/projects/lowolf/small/lowolf3.jpg', '../images/projects/lowolf/small/lowolf4.jpg', '../images/projects/lowolf/small/lowolf5.jpg', '../images/projects/lowolf/small/lowolf6.jpg'],
    technologies: ["Vue.js", "Node", "Express", "Postgres"],
		links: {
			github: 'https://github.com/kcsommers/Star_Stacker/tree/master',
			live: 'https://kcsommers.github.io/Star_Stacker/'
		}
  },
	{
		name: "Star Stacker",
		description: "Two player front-end game, based on SEGA’s Columns, in which players match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.",
		extraDescription: "Based on SEGA’s Columns, this two player front end game requires players to match colored pieces vertically, horizontally and diagonally as they drop down the screen at increasing speeds.\n \nColumns was (and still is) one of my favorite video games, and I was very excited to be able to create my own spin on it using JavaScript and CSS Canvas. The goal is to move and match the stacks around the grid, surviving as long as you can before the pieces reach the top (much like Tetris). More points are scored if the disappearing pieces allow the ones above to drop again and create new matches.\n \nThere is a lot of logic to this game, and a lot of potential bugs. In order to track them down, I often had to use Chrome's developer tools to watch the JavaScript execute one step at a time. As one of the first projects I'd ever developed, I certainly grew a lot as a developer from the challenges this game presented. ",
    imagesLg: ['../images/projects/star_stacker/large/starstacker.jpg', '../images/projects/star_stacker/large/starstacker1.jpg', '../images/projects/star_stacker/large/starstacker2.jpg', '../images/projects/star_stacker/large/starstacker3.jpg', '../images/projects/star_stacker/large/starstacker4.jpg'],
    imagesSm: ['../images/projects/star_stacker/small/starstacker.jpg', '../images/projects/star_stacker/small/starstacker1.jpg', '../images/projects/star_stacker/small/starstacker2.jpg', '../images/projects/star_stacker/small/starstacker3.jpg', '../images/projects/star_stacker/small/starstacker4.jpg'],
		technologies: ["HTML5", "CSS", "CSS Canvas", "JavaScript", "jQuery"],
		links: {
			github: 'https://github.com/kcsommers/Star_Stacker/tree/master',
			live: 'https://kcsommers.github.io/Star_Stacker/'
		}
	},
	{
		name: "Musaic",
		description: "MERN stack application which allows users to create spotify playlists based on the mood of an uploaded photograph.",
		extraDescription: "Musaic is a MERN stack application which provides users a way to easily create a music playlist by simply taking a photograph.\n \nWhether a user is hiking through the woods, laying on the beach, working late or relaxing at home, Musaic will attempt to capture the mood of their setting, and utilize Spotify's wide range of song attributes to create a playlist to match. To acheive this, we developed a color to mood algorithm using the Hue, Saturation and Lightness values of the most dominant colors in the photograph. These values are converted into the attributes valence, energy, danceability and mode, which are then sent to the Spotify API.\n \nAs the app currently stands, in order to play the tracks the user's playlist is opened in Spotify. We hope to continue developing our application so that it supports the playing of audio without leaving the site.",
    imagesLg: ['../images/projects/musaic/large/musaic.jpg', '../images/projects/musaic/large/musaic1.jpg', '../images/projects/musaic/large/musaic2.jpg', '../images/projects/musaic/large/musaic3.jpg'],
    imagesSm: ['../images/projects/musaic/small/musaic.jpg', '../images/projects/musaic/small/musaic1.jpg', '../images/projects/musaic/small/musaic2.jpg', '../images/projects/musaic/small/musaic3.jpg'],
		technologies: ["React.js", "CSS", "Node.js", "Express.js", "MongoDB"],
		links: {
			github: 'https://github.com/kcsommers/project3',
			live: 'https://moodsic11.herokuapp.com/'
		}
	}
];

module.exports = projects;