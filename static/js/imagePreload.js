const imageUrls = [
  '../images/mkacy_logo2.png',
  '../images/joni.jpg',
  '../images/about_background.jpg',
  '../images/projects/bookkeeper/large/bookkeeper.jpg', '../images/projects/bookkeeper/large/bookkeeper1.jpg', '../images/projects/bookkeeper/large/bookkeeper2.jpg', '../images/projects/bookkeeper/large/bookkeeper3.jpg', '../images/projects/bookkeeper/large/bookkeeper4.jpg', '../images/projects/bookkeeper/large/bookkeeper5.jpg', '../images/projects/bookkeeper/large/bookkeeper6.jpg', '../images/projects/bookkeeper/large/bookkeeper7.jpg',
  '../images/projects/bookkeeper/small/bookkeeper.jpg', '../images/projects/bookkeeper/small/bookkeeper1.jpg', '../images/projects/bookkeeper/small/bookkeeper2.jpg', '../images/projects/bookkeeper/small/bookkeeper3.jpg', '../images/projects/bookkeeper/small/bookkeeper4.jpg', '../images/projects/bookkeeper/small/bookkeeper5.jpg', '../images/projects/bookkeeper/small/bookkeeper6.jpg', '../images/projects/bookkeeper/small/bookkeeper7.jpg',
  '../images/projects/good_market/large/goodmarket.jpg', '../images/projects/good_market/large/goodmarket1.jpg', '../images/projects/good_market/large/goodmarket2.jpg', '../images/projects/good_market/large/goodmarket3.jpg',
  '../images/projects/good_market/large/goodmarket4.jpg',
  '../images/projects/good_market/large/goodmarket5.jpg',
  '../images/projects/good_market/small/goodmarket.jpg', '../images/projects/good_market/small/goodmarket1.jpg', '../images/projects/good_market/small/goodmarket2.jpg', '../images/projects/good_market/small/goodmarket3.jpg', '../images/projects/good_market/small/goodmarket4.jpg', '../images/projects/good_market/small/goodmarket5.jpg',
  '../images/projects/lowolf/large/lowolf.jpg', '../images/projects/lowolf/large/lowolf1.jpg', '../images/projects/lowolf/large/lowolf2.jpg', '../images/projects/lowolf/large/lowolf3.jpg', '../images/projects/lowolf/large/lowolf4.jpg', '../images/projects/lowolf/large/lowolf5.jpg', '../images/projects/lowolf/large/lowolf6.jpg',
  '../images/projects/lowolf/small/lowolf.jpg', '../images/projects/lowolf/small/lowolf1.jpg', '../images/projects/lowolf/small/lowolf2.jpg', '../images/projects/lowolf/small/lowolf3.jpg', '../images/projects/lowolf/small/lowolf4.jpg', '../images/projects/lowolf/small/lowolf5.jpg', '../images/projects/lowolf/small/lowolf6.jpg',
  '../images/projects/star_stacker/large/starstacker.jpg', '../images/projects/star_stacker/large/starstacker1.jpg', '../images/projects/star_stacker/large/starstacker2.jpg', '../images/projects/star_stacker/large/starstacker3.jpg', '../images/projects/star_stacker/large/starstacker4.jpg',
  '../images/projects/star_stacker/small/starstacker.jpg', '../images/projects/star_stacker/small/starstacker1.jpg', '../images/projects/star_stacker/small/starstacker2.jpg', '../images/projects/star_stacker/small/starstacker3.jpg', '../images/projects/star_stacker/small/starstacker4.jpg',
  '../images/projects/musaic/large/musaic.jpg', '../images/projects/musaic/large/musaic1.jpg', '../images/projects/musaic/large/musaic2.jpg', '../images/projects/musaic/large/musaic3.jpg',
  '../images/projects/musaic/small/musaic.jpg', '../images/projects/musaic/small/musaic1.jpg', '../images/projects/musaic/small/musaic2.jpg', '../images/projects/musaic/small/musaic3.jpg',
  '../images/KacySommers_Resume.pdf'
];

const preloadImages = function() {
  const allImages = [];
  imageUrls.forEach((img) => {
    let image = new Image();
    image.src = img;
    allImages.push(image);
  });
};

preloadImages();