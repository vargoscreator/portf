$(function(){
    $('.bike__column-slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    $('.slider__two-items').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });
});

let bodyclick = document.querySelector('.body');
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let header__overlay = document.querySelector('.header__overlay');
let header__list = document.querySelector('.header__menu-list');




header__burger.onclick = function(){
  changeClass();
}

header__overlay.onclick = function(){
  changeClass();
}

header__list.onclick = function(){
  if(this.classList.contains('active')){
    changeClass();
  }
}

function changeClass(){
    bodyclick.classList.toggle('lock');
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    header__overlay.classList.toggle('lock');
    header__list.classList.toggle('active');
}