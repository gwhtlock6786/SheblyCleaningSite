var myNav = document.getElementById('navBar');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        myNav.classList.add("bg-pink");
        myNav.classList.remove("bg-dark");
    } 
    else {
        myNav.classList.add("bg-dark");
        myNav.classList.remove("bg-pink");
    }
};