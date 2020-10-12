var myNav = document.getElementById('navBar');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        myNav.classList.add("navbar-dark" ,"bg-dark");
        myNav.classList.remove("navbar-light","bg-transparent");
    } 
    else {
        myNav.classList.add("navbar-light", "bg-transparent");
        myNav.classList.remove("navbar-dark","bg-dark");
    }
};