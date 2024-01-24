// Строгий режим
"use strict"


/*---class = .advantages__item-----------кнопка-------------javascript---------------------*/
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
/*---class = .advantages__item-----------кнопка-------------javascript---------------------*/
