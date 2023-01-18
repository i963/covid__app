// MENU
"use strict"
const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
const header = document.querySelector('.header__wrapper');
const allBody = document.body;
// const container = document.querySelector('.container');
if(menuBurger){
menuBurger.addEventListener('click', function(){
	menuBurger.classList.toggle('_active');
	menuBody.classList.toggle('_active');	
   // header.style.position = 'fixed'
})
}
if (menuBurger.classList.contains('_active') || menuBody.classList.contains('_active') ) {
	allBody.style.overflow = 'hidden'
}

// function burgerMenu(){
// // container.classList.toggle('_lock');
// menuBurger.classList.toggle('_active');
// menuBody.classList.toggle('_active');	
// document.body.classList.toggle('_lock')
// }

// $('html, body').css('overflow', 'hidden'); - блокировка скролла. 
// Если хотите вернуть в дефолтное состояние, то - $('html, body').css('overflow', '');