// Строгий режим
"use strict"


const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

/* ---------------------------------БУРГЕР МЕНЮ---------------------------------------- */

/* =====================================sliderFON=============================================== */


$('.slider').slick({
    arrows:true,   /* кнопки: true - включить, false - выключить */   
    dots: true,      /* точки для переключения кратинок */  
    infinite: true,  /* бесконечное перелистывание фото */
    fade:true,     /* будет только 1 фото видна, что нам и нужно */
    speed: 500,    /* со скоростью 1 сек. */
    slidesToShow: 1, /* здесь указываем количество слайдов, которое хотим отобразить за 1 раз */   
    slidesToScroll:1, /* количество слайдом за 1 пролистывание */
    adaptiveHeight: true, /* автоматическая Адаптивная высота слайда-картинки */

    autoplay:true, /* авто перелистывание */
    swipe:true, /* на мобильных устройствах можно свайпать фото пальцем */
    cssEase: 'linear' /* классный эффект перелистывания */
  });

/* =====================================sliderFON=============================================== */



/*---class = .main__upbutton-----------кнопка-------------javascript---------------------*/
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
			//targetElement/classList.remove('show');
			console.log('я тебя не вижу');
		}
	});
}

let observer = new IntersectionObserver(callback, options);

//если 1 обьект
let target = document.querySelector(".main__upbutton");
observer.observe(target);