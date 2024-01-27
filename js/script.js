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





/*-----кнопка-------------javascript-----СПОЙЛЕР----------------классный---------------------------------------*/

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;


	if (targetElement.closest('[data-spoller]')) {
		const currentElement = targetElement.closest('[data-spoller]');
		currentElement.classList.toggle('active');
		currentElement.nextElementSibling.hidden = !currentElement.nextElementSibling.hidden;
	}
}

const spollers = document.querySelectorAll('[data-spoller]');

if (spollers.length) {
	spollers.forEach(spoller => {
		spoller.nextElementSibling.hidden = true;
	});
}


/*-----кнопка-------------javascript-----СПОЙЛЕР----------------классный---------------------------------------*/