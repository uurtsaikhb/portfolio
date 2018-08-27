(function(d) {
    'use strict';

    const menuBtn = d.querySelector('.menu-btn');
    const menu = d.querySelector('.menu');
    const menuNav = d.querySelector('.menu-nav');
    const menuBranding = d.querySelector('.menu-branding');
    const navItems = d.querySelectorAll('.nav-item');

    let showMenu = false;
    const classes = {
        CLOSE: 'close',
        SHOW: 'show'
    };

    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (!showMenu) {
            addClass(menuBtn, classes.CLOSE);
            addClass([menu, menuNav, menuBranding], classes.SHOW);
            navItems.forEach(item => addClass(item, classes.SHOW));

            showMenu = true;
        } else {
            removeClass(menuBtn, classes.CLOSE);
            removeClass([menu, menuNav, menuBranding], classes.SHOW);
            navItems.forEach(item => removeClass(item, classes.SHOW));

            showMenu = false;
        }
    }

    function addClass(element, className) {
        if (Array.isArray(element)) {
            element.forEach(el => el.classList.add(className));
        } else {
            element.classList.add(className);
        }
    }

    function removeClass(element, className) {
        if (Array.isArray(element)) {
            element.forEach(el => el.classList.remove(className));
        } else {
            element.classList.remove(className);
        }
    }
})(document);
