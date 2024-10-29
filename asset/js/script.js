AOS.init();

const themeToggleBtn = document.getElementById('themeToggle');

// Fungsi untuk toggle antara mode terang dan gelap
themeToggleBtn.addEventListener('click', function () {
	const body = document.body;
	body.classList.toggle('dark-mode');

	// Ubah teks button sesuai mode
	if (body.classList.contains('dark-mode')) {
		themeToggleBtn.textContent = '🌜';
	} else {
		themeToggleBtn.textContent = '🌞';
	}
});

const swiperFull = new Swiper(".swiper-full", {
	autoplay: {
		delay: 3000
	},
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 32,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		// dynamicBullets: true,
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		}
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});
$(".swiper-full").mouseenter(function () {
	swiperFull.autoplay.stop();
});
$(".swiper-full").mouseleave(function () {
	swiperFull.autoplay.start();
});

const swiperTestmonials = new Swiper('.swiper-testmonials', {
	autoplay: {
		delay: 3000
	},
	loop: true,
	slidesPerView: 1.2,
	grabCursor: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-testmonials-next',
		prevEl: '.swiper-button-testmonials-prev',
	},
	breakpoints: {
		// when window width is >= 640px
		500: {
			slidesPerView: 1.4,
		},
		780: {
			slidesPerView: 1.8,
		},
		1300: {
			slidesPerView: 2.6,
		},
		1630: {
			slidesPerView: 3.2,
		}
	}
});