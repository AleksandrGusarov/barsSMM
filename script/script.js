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
  // весь ваш код здесь
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
        if (window.scrollY > 100) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     var navigation = document.querySelector('.navigation-extra');

//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 0) {
//             navigation.classList.add('scrolled');
//         }
//     });
// });

//preloader
document.body.onload = function(){

    setTimeout( function(){
    var preloader = document.getElementById('preloader');
    if ( !preloader.classList.contains('hide') )
    {
        preloader.classList.add('hide');
    }
    }, 1500);
}

//contact popup open
document.addEventListener('DOMContentLoaded', function() {
  var menuOpenButton = document.getElementById('menu-open');
  var menuCloseButton = document.querySelector('.menu-close-button');
  var menuItems = document.querySelectorAll('.menu-item');

  menuOpenButton.addEventListener('click', function() {
    menuItems.forEach(function(item, index) {
      setTimeout(function() {
        item.classList.toggle('show');
      }, index * 300); // Задержка увеличена до 100 миллисекунд
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