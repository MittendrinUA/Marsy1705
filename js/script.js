'use strict'

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());        
    }

};

// if (isMobile.any()) {
//     document.body.classList.add('_touch');

//     let menuArrows = document.querySelectorAll('.menu__arrow');
//     if (menuArrows.length > 0) {
//         for (let index = 0; index < menuArrows.length; index++) {
//             const menuArrow = menuArrows[index];
//             menuArrow.addEventListener("click", function (e) {
//                 menuArrow.parentElement.classList.toggle('_active');
//             });
//         }
//     }
// } else {
//     document.body.classList.add('_pc');
// }


// Меню бургер
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Search form (with button)

const searchBtn = document.querySelector('.header__search');
const searchForm = document.querySelector('.header__form');
const formBtn = document.querySelector('.form-btn');
const toggleMenu = function() {
    searchForm.classList.toggle('_active');
}



searchBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    e.stopPropagation();
    toggleMenu();

});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == searchForm || searchForm.contains(target);
    const its_btnMenu = target == searchBtn;
    const menu_is_active = searchForm.classList.contains('_active');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});


// IBG

function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
    
ibg();
