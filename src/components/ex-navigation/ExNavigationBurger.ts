document.addEventListener("DOMContentLoaded", function() {
    let el = document.querySelectorAll('.navigation')[0]

    el.innerHTML = '<div class="ex-menu-burger"><span class="ex-menu-burger__icon-bar"></span><span class="ex-menu-burger__icon-bar"></span><span class="ex-menu-burger__icon-bar"></span></div>'
    + el.innerHTML;

    document.querySelectorAll('.ex-menu-burger')[0].addEventListener('click', function(e) {
        let burgerMenu = document.querySelectorAll('.ex-menu-burger')[0];
        let menu = document.querySelectorAll('.ex-navigation__list--navigationitems')[0];

        if(burgerMenu.classList.contains('open')) {
            burgerMenu.classList.remove('open');
            menu.classList.remove('open');
        } else {
            burgerMenu.className += " open";
            menu.classList.add('open');
        }
    });
});
