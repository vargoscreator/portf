  

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
window.addEventListener('click', function(event){
  const counterWrapper = event.target.closest('.arrow__count')

  if (event.target.classList.contains("arrow") || event.target.classList.contains("questions__arrow") || event.target.classList.contains("questions__link")) {
      counterWrapper.classList.toggle('active'); 
  }
});
$(".footer__box").on("click", ".footer__item", function() {
	$(".footer__item").removeClass("select");
	let index = $(this).index();
	$(this).addClass("select");
});
$(".podcasts__menu").on("click", ".podcasts__item", function() {
	$(".podcasts__item").removeClass("select");
	let index = $(this).index();
	$(this).addClass("select");
});