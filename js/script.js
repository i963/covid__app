// MENU
"use strict"
const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
const header = document.querySelector('.header__wrapper');
const allBody = document.body;

menuBurger.addEventListener('click', function(){
	if (menuBody.classList.contains('_active')){
	menuBurger.classList.remove('_active');
	menuBody.classList.remove('_active');	
	document.body.style.cssText = '';
	} else{
	menuBurger.classList.add('_active');
	menuBody.classList.add('_active');	
	document.body.style.cssText = `overflow: hidden`;
	}
})

// const scrollController = {
// 	disabledScroll(){
// 		document.body.style.cssText = `overflow: hidden`;
// 	},
// 	enabledScroll(){
// 		document.body.style.cssText = '';

// 	},
// }
// const openBurger = () => {
// 	scrollController.disabledScroll()
// }
// const closeBurger = () => {
// 	scrollController.enabledScroll()
// }
