
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
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header_nav_active');
            });
        }
    }
}());