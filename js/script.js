// Строгий режим
"use strict"

/* ---------------------------------БУРГЕР МЕНЮ---------HEADER------------------------------- */
const icon = document.querySelector('.icon-menu');
const menuLinks = document.querySelectorAll('.menu__link');

icon.addEventListener('click', function () {
  document.documentElement.classList.toggle('menu-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    document.documentElement.classList.remove('menu-open');
  });
});
/* ---------------------------------БУРГЕР МЕНЮ---------HEADER------------------------------- */

/* ------- ----------------планый переход по секциям с необрезанным верхом страницы ------------ (HEADER)--- ------------ */

document.querySelectorAll(".menu__link").forEach(function (a) {				/*<a href="index.html" class="menu__link">Home</a>*/
	a.addEventListener("click", function (event) {
  
	  const hash = event.target.getAttribute("href");
	  const scrollTarget = document.querySelector(hash);
  
  
	  if (scrollTarget) {
		const headerHeight = document.querySelector("header").offsetHeight;
		window.scroll({
		  top: scrollTarget.offsetTop - headerHeight,
		  behavior: "smooth"
		});
	  }
	  event.preventDefault();
	});
  });

/* ------- ----------------планый переход по секциям с необрезанным верхом страницы ------------ --- (HEADER) ------------ */


/* ------- ----------------планый переход по секциям с необрезанным верхом страницы ------------ --- (FOOTER) ------------ */
document.querySelectorAll(".footer__a").forEach(function (a) {				/*<a href="#home" class="footer__a">Home</a>*/
	a.addEventListener("click", function (event) {
  
	  const hash = event.target.getAttribute("href");
	  const scrollTarget = document.querySelector(hash);
  
  
	  if (scrollTarget) {
		const headerHeight = document.querySelector("header").offsetHeight;
		window.scroll({
		  top: scrollTarget.offsetTop - headerHeight,
		  behavior: "smooth"
		});
	  }
	  event.preventDefault();
	});
  });
/* ------- ----------------планый переход по секциям с необрезанным верхом страницы ------------ --- (FOOTER) ------------ */









/*---class = .advantages__item-----------кнопка-------------javascript-----------анимация по старнице----------*/
let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	//% от размера обьекта
	//при появлении которого срабатывает действие
	threshold: 0.3,
};
let callback = (entries, observer) => {
	entries.forEach((entry) => {
		const targetElement = entry.target;
		if (entry.isIntersecting) {
			targetElement.classList.add("show");
			console.log('я тебя вижу');
		} else {
			targetElement/classList.remove("show");
			console.log('я тебя не вижу');
		}
	});
}

let observer = new IntersectionObserver(callback, options);


//если обьектов много (с модификатором --anim)
let someElements = document.querySelectorAll("[class*='--anim']");
someElements.forEach(someElement => {
	observer.observe(someElement);
});
/*---class = .advantages__item-----------кнопка-------------javascript-----------анимация по старнице----------*/







/* ------------------------------------spoiler---------------------------------------- */
window.onload = function() {
	var spoilers = document.getElementsByClassName('questions__toggle');
	for(var i=0; i<spoilers.length; ++i){
	  spoilers[i].addEventListener("click", function () {
		var contentEl = this.parentElement.querySelector('.questions__title');
		var isOpen = contentEl.classList.contains('open');
		contentEl.classList[isOpen ? 'remove' : 'add']('open');
		contentEl.setAttribute('aria-hidden', !isOpen);
		this.setAttribute('aria-expanded', isOpen);
	  });

	  spoilers[i].addEventListener("keydown", function (e) {
		if (e.keyCode === 13 || e.keyCode === 32) { // 13 is Enter, 32 is Space
		  e.preventDefault();
		  this.click();
		  return false;
		}
	  });
	}
  };
  /* ------------------------------------spoiler---------------------------------------- */



//----------------------------------horizont-line---------burger------------------------------
/* 	const iconS = document.querySelector('.horizont-line');		//---------------(если для одного бургера то будет работать)--------------
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('line-open');
}); */
//----------------------------------horizont-line---------burger------------------------------