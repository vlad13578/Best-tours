
/* Підключення слайдера */
$(document).ready(function(){
	$('.slider').slick({
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		pauseOnDotsHover: true,
		responsive: [
		  {
			breakpoint: 1400,
			settings: {
			  arrows: true,
			  centerMode: false,
			  centerPadding: '40px',
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 1027,
			settings: {
			  arrows: false,
			  centerMode: false,
			  centerPadding: '50px',
			  slidesToShow: 2
			}
		  }
		]
	});
});
/* Бургер меню */
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav_close');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
}());

