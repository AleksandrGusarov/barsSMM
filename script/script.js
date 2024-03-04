//clumber scroll icon
let initialImagePosition = -855;
document.addEventListener('scroll', function () {
	let scrollPosition = window.scrollY || document.documentElement.scrollTop;
	let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
	let scrollImage = document.querySelector('.scroll-image');

	let imagePosition = initialImagePosition + scrollPosition / maxScroll * (window.innerHeight - scrollImage.offsetHeight / 5);
	scrollImage.style.top = imagePosition + 'px';
});

// Кнопка "Вверх"
function scrollToTop() {
	var scrollStep = -window.scrollY / (800 / 15);
	var scrollInterval = setInterval(function () {
		if (window.scrollY !== 0) {
			window.scrollBy(0, scrollStep);
		} else {
			clearInterval(scrollInterval);
		}
	}, 15);
}

// Добавляем обработчик клика на кнопку "наверх"
function scrollToTop() {
	var currentScroll = window.scrollY;

	function step(timestamp) {
		currentScroll = currentScroll - 20; // Уменьшаем значение для увеличения скорости
		window.scrollTo(0, currentScroll);

		if (currentScroll > 0) {
			window.requestAnimationFrame(step);
		}
	}

	window.requestAnimationFrame(step);
}

// Добавляем обработчик клика на кнопку "наверх"
document.querySelector('.back-to-top').addEventListener('click', scrollToTop);

// Добавляем обработчик прокрутки страницы
window.addEventListener('scroll', function () {
	var scrolled = window.scrollY; // Получаем высоту прокрутки

	// Если высота прокрутки больше 350, показываем кнопку, иначе скрываем
	var backToTopButton = document.querySelector('.back-to-top');
	if (scrolled > 350) {
		backToTopButton.classList.add('active');
	} else {
		backToTopButton.classList.remove('active');
	}
});

//запуск анимации спуска работника 2
document.addEventListener("DOMContentLoaded", function () {
    var bannerSection = document.querySelector(".services");
    var stickyElement = document.querySelector(".builder__sticky");
		var isElementVisible = false;

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY + window.innerHeight;
        var sectionPosition = bannerSection.offsetTop;

        if (scrollPosition > sectionPosition) {
            // Добавляем задержку в 500 миллисекунд (можете изменить значение по своему усмотрению)
            setTimeout(function () {
                stickyElement.style.opacity = 1;
                stickyElement.style.transform = "translateY(390px)"; /* Смещаем элемент вниз при появлении */
            }, 300);

        } else if (scrollPosition <= sectionPosition && isElementVisible) {
            // Если пользователь проскроллил вверх, сбрасываем флаг видимости
            stickyElement.style.opacity = 0;
            stickyElement.style.transform = "translateY(-20px)";
            isElementVisible = false;
        }
    });
});

//Observer API
//settings
  let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.2
  }

  // функции обратного вызова
  let callback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('find', entry);
        entry.target.classList.add('active');
				observer.unobserve(entry.target);
      }
    });
  }

  // наблюдатель
  let observer = new IntersectionObserver(callback, options);

  // определяем элементы, за которыми наблюдаем
  let targets = document.querySelectorAll('.anim')
  targets.forEach(target => {
    observer.observe(target);
  });

//смена цвета при скролле хедера
document.addEventListener('DOMContentLoaded', function() {
    var navigation = document.querySelector('.navigation');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });
});

//preloader
document.body.onload = function(){

    setTimeout( function(){
    var preloader = document.getElementById('preloader');
    if ( !preloader.classList.contains('hide') )
    {
        preloader.classList.add('hide');
    }
    }, 1000);
}

//contact popup open
document.addEventListener('DOMContentLoaded', function() {
  var menuOpenButton = document.getElementById('menu-open');
  var menuCloseButton = document.querySelector('.menu-close-button');
  var menuItems = document.querySelectorAll('.menu-item');

  menuOpenButton.addEventListener('click', function() {
    menuItems.forEach(function(item) {
      item.classList.toggle('show');
    });

    menuOpenButton.classList.toggle('hide');
    menuCloseButton.classList.toggle('show');
  });

  menuCloseButton.addEventListener('click', function() {
    menuItems.forEach(function(item) {
      item.classList.toggle('show');
    });

    menuOpenButton.classList.toggle('hide');
    menuCloseButton.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.contact')) {
      menuItems.forEach(function(item) {
        item.classList.remove('show');
      });

      menuOpenButton.classList.remove('hide');
      menuCloseButton.classList.remove('show');
    }
  });
});

//accordion faq hidden answer
document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion__button');

    accordionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const accordionBody = this.nextElementSibling;

        accordionBody.classList.toggle('accordion__body--hidden');

        this.classList.toggle('active', !accordionBody.classList.contains('accordion__body--hidden'));
      });
    });
  });



	//Y-Map

	// let center = [59.989511753181056,30.25513818839261];

	// function init() {
	// 	let map = new ymaps.Map('map', {
	// 		center: center,
	// 		zoom: 13
	// 	});

		//default balloon
		// let placemark = new ymaps.Placemark(center, {
		// 	balloonContentHeader: 'Хедер балуна',
		// 	balloonContentBody: 'Боди балуна',
		// 	balloonContentFooter: 'Футер балуна',
		// }, {
		// 	iconLayout: 'default#image',
		// 	iconImageHref: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/444843.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwOTc1OTE0MSwicSI6bnVsbCwiaWF0IjoxNzA5NDk5OTQxfQ__.985306a9e68bca23666401bcd6d5c4e48466eef92023632fd2ecdead402f4e46',
		// 	iconImagesize: [20, 20],
		// 	iconImageOffset: [-15, -20]
		// });

	// 	let placemark1 = new ymaps.Placemark(center, {
	// 		balloonContent: `
			
	// 		<div class="ballon">
	// 			<a href="#">
	// 				<h3 class="ballon__title">Герметизация балкона и окон</h3>
	// 				<p class="ballon__description">Герметизация балкона и окон</p>
	// 				<img src="../img/black-bg.png" alt="">
	// 			</a>	
	// 		</div>

	// 		`
	// 	}, {
	// 		iconLayout: 'default#image',
	// 		iconImageHref: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/444843.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwOTc1OTE0MSwicSI6bnVsbCwiaWF0IjoxNzA5NDk5OTQxfQ__.985306a9e68bca23666401bcd6d5c4e48466eef92023632fd2ecdead402f4e46',
	// 		iconImagesize: [20, 20],
	// 		iconImageOffset: [-15, -20]
	// 	});

	// 	let placemark2 = new ymaps.Placemark([59.99629682039777,30.253679062481762], {
	// 		balloonContent: `
			
	// 		<div class="ballon">
	// 			<a href="#">
	// 				<h3 class="ballon__title">Герметизация балкона и окон2</h3>
	// 				<p class="ballon__description">Герметизация балкона и окон2</p>
	// 				<img src="../img/black-bg.png" alt="">
	// 			</a>	
	// 		</div>

	// 		`
	// 	}, {
	// 		iconLayout: 'default#image',
	// 		iconImageHref: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/444843.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwOTc1OTE0MSwicSI6bnVsbCwiaWF0IjoxNzA5NDk5OTQxfQ__.985306a9e68bca23666401bcd6d5c4e48466eef92023632fd2ecdead402f4e46',
	// 		iconImagesize: [20, 20],
	// 		iconImageOffset: [-15, -20]
	// 	});

	// 	let placemark3 = new ymaps.Placemark([60.00176406186947,30.215456396773508], {
	// 		balloonContent: `
			
	// 		<div class="ballon">
	// 			<a href="#">
	// 				<h3 class="ballon__title">Герметизация балкона и окон3</h3>
	// 				<p class="ballon__description">Герметизация балкона и окон3</p>
	// 				<img src="../img/black-bg.png" alt="">
	// 			</a>	
	// 		</div>

	// 		`
	// 	}, {
	// 		iconLayout: 'default#image',
	// 		iconImageHref: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/444843.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwOTc1OTE0MSwicSI6bnVsbCwiaWF0IjoxNzA5NDk5OTQxfQ__.985306a9e68bca23666401bcd6d5c4e48466eef92023632fd2ecdead402f4e46',
	// 		iconImagesize: [20, 20],
	// 		iconImageOffset: [-15, -20]
	// 	});

	// 	map.controls.remove('geolocationControl'); // удаляем геолокацию
	// 	// map.controls.remove('searchControl'); // удаляем поиск
	// 	map.controls.remove('trafficControl'); // удаляем контроль трафика
	// 	// map.controls.remove('typeSelector'); // удаляем тип
	// 	// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// 	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	// 	map.controls.remove('rulerControl'); // удаляем контрол правил
	// 	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	// 	// map.geoObjects.add(placemark);
	// 	map.geoObjects.add(placemark1);
	// 	map.geoObjects.add(placemark2);
	// 	map.geoObjects.add(placemark3);
	// }

	// ymaps.ready(init);


	
		//Y map category
	const categoriesData = {
	categoryAll : [{
			lat: 60.00368,
			lon: 30.20399,
			name: 'Уборка снега и наледи с кровли1',
			balloonContent: `
				<div class="ballon">
					<a href="#card1">
						<h3 class="ballon__title">Уборка снега и наледи с кровли1</h3>
						<p class="ballon__description">Описание уборки снега и наледи с кровли</p>
						<img src="../img/black-bg.png" alt="">
					</a>	
				</div>
			`,
		},
		{
			lat: 60.00383,
			lon: 30.19781,
			name: 'Уборка снега и наледи с кровли2',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Уборка снега и наледи с кровли2</h3>
						<p class="ballon__description">Описание уборки снега и наледи с кровли</p>
						<img src="../img/black-bg.png" alt="">
					</a>	
				</div>
			`,
		},
		{
			lat: 60.00851,
			lon: 30.20344,
			name: 'Ремонт межпанельных швов1',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт межпанельных швов1</h3>
						<p class="ballon__description">Описание Ремонт межпанельных швов1</p>
						<img src="../img/black-bg.png" alt="">
					</a>	
				</div>
			`,
		},
		{
			lat: 60.00812,
			lon: 30.20603,
			name: 'Ремонт межпанельных швов2',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт межпанельных швов2</h3>
						<p class="ballon__description">Ремонт межпанельных швов2</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`
		},
		{
			lat: 60.00723,
			lon: 30.21372,
			name: 'Ремонт фасадов1',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт фасадов1</h3>
						<p class="ballon__description">Ремонт фасадов1</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
		{
			lat: 60.00666,
			lon: 30.21776,
			name: 'Ремонт фасадов2',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт фасадов2</h3>
						<p class="ballon__description">Ремонт фасадов2</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
		{
			lat: 60.005105,
			lon: 30.21992,
			name: 'Ремонт мягкой кровли1',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт мягкой кровли1</h3>
						<p class="ballon__description">Ремонт мягкой кровли1</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
		{
			lat: 60.00386,
			lon: 30.21922,
			name: 'Ремонт мягкой кровли2',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт мягкой кровли2</h3>
						<p class="ballon__description">Ремонт мягкой кровли2</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
		{
			lat: 59.99950,
			lon: 30.21641,
			name: 'Текущий и капитальный ремонт жесткой кровли пример1',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Текущий и капитальный ремонт жесткой кровли1</h3>
						<p class="ballon__description">Текущий и капитальный ремонт жесткой кровли1</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
		{
			lat: 59.99834,
			lon: 30.21784,
			name: 'Текущий и капитальный ремонт жесткой кровли пример2',
			balloonContent: `
				<div class="ballon">
					<a href="#" >
						<h3 class="ballon__title">Текущий и капитальный ремонт жесткой кровли1</h3>
						<p class="ballon__description">Текущий и капитальный ремонт жесткой кровли1</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
	],
	category2 : [{
			lat: 60.00368,
			lon: 30.20399,
			name: 'Уборка снега и наледи с кровли1',
			balloonContent: `
				<div class="ballon">
					<a href="#card1">
						<h3 class="ballon__title">Уборка снега и наледи с кровли1</h3>
						<p class="ballon__description">Описание уборки снега и наледи с кровли</p>
						<img src="../img/black-bg.png" alt="">
					</a>	
				</div>
			`,
		},
		{
			lat: 60.00383,
			lon: 30.19781,
			name: 'Уборка снега и наледи с кровли2',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Уборка снега и наледи с кровли2</h3>
						<p class="ballon__description">Описание уборки снега и наледи с кровли</p>
						<img src="../img/black-bg.png" alt="">
					</a>	
				</div>
			`,
		},
	],
	category3 : [{
			lat: 60.00851,
			lon: 30.20344,
			name: 'Ремонт межпанельных швов1',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт межпанельных швов1</h3>
						<p class="ballon__description">Описание Ремонт межпанельных швов1</p>
						<img src="../img/black-bg.png" alt="">
					</a>	
				</div>
			`,
		},
		{
			lat: 60.00812,
			lon: 30.20603,
			name: 'Ремонт межпанельных швов2',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт межпанельных швов2</h3>
						<p class="ballon__description">Ремонт межпанельных швов2</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
	],
	category4 : [{
			lat: 60.00723,
			lon: 30.21372,
			name: 'Ремонт фасадов1',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт фасадов1</h3>
						<p class="ballon__description">Ремонт фасадов1</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
		{
			lat: 60.00666,
			lon: 30.21776,
			name: 'Ремонт фасадов2',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт фасадов2</h3>
						<p class="ballon__description">Ремонт фасадов2</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
	],
	category5 : [{
			lat: 60.005105,
			lon: 30.21992,
			name: 'Ремонт мягкой кровли1',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт мягкой кровли1</h3>
						<p class="ballon__description">Ремонт мягкой кровли1</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
		{
			lat: 60.00386,
			lon: 30.21922,
			name: 'Ремонт мягкой кровли2',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Ремонт мягкой кровли2</h3>
						<p class="ballon__description">Ремонт мягкой кровли2</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
	],
	category6 : [{
			lat: 59.99950,
			lon: 30.21641,
			name: 'Текущий и капитальный ремонт жесткой кровли пример1',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Текущий и капитальный ремонт жесткой кровли1</h3>
						<p class="ballon__description">Текущий и капитальный ремонт жесткой кровли1</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
		{
			lat: 59.99834,
			lon: 30.21784,
			name: 'Текущий и капитальный ремонт жесткой кровли пример2',
			balloonContent: `
				<div class="ballon">
					<a href="#">
						<h3 class="ballon__title">Текущий и капитальный ремонт жесткой кровли2</h3>
						<p class="ballon__description">Текущий и капитальный ремонт жесткой кровли2</p>
						<img src="../img/black-bg.png" alt="">
					</a>
				</div>
			`,
		},
	],
};


const center = [59.989511753181056,30.25513818839261];

const init = () => {
	const map = new ymaps.Map('map', {
		center: center,
		zoom: 12,
	});

	let activeCategory = "categoryAll";

	const showCategory = (category) => {
		map.geoObjects.removeAll();

		categoriesData[category].forEach((item) => {
			const placemark = new ymaps.Placemark([item.lat, item.lon], {
				hintContent: item.name,
				balloonContent: item.balloonContent,
				}, {
				iconLayout: 'default#image',
				// iconImageHref: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/444843.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwOTc1OTE0MSwicSI6bnVsbCwiaWF0IjoxNzA5NDk5OTQxfQ__.985306a9e68bca23666401bcd6d5c4e48466eef92023632fd2ecdead402f4e46',
				iconImagesize: [20, 20],
				iconImageOffset: [-15, -20]
			});


			map.controls.remove('geolocationControl'); // удаляем геолокацию
			// map.controls.remove('searchControl'); // удаляем поиск
			map.controls.remove('trafficControl'); // удаляем контроль трафика
			// map.controls.remove('typeSelector'); // удаляем тип
			// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
			// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
			map.controls.remove('rulerControl'); // удаляем контрол правил
			map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

			map.geoObjects.add(placemark);
		});

		map.geoObjects.add(geoObjectCollection);
		activeCategory = category;
	}

	const categoryButtons = document.querySelectorAll('.map-button__btn');
	categoryButtons.forEach((button) => {
		button.addEventListener('click', (e) => {
			const category = e.currentTarget.dataset.category;
			showCategory(category);
		})
	});

	showCategory(activeCategory);
};

ymaps.ready(init);



