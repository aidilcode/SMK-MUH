AOS.init();

// const themeToggleBtn = document.getElementById('themeToggle');

// // Fungsi untuk toggle antara mode terang dan gelap
// themeToggleBtn.addEventListener('click', function () {
// 	const body = document.body;
// 	body.classList.toggle('dark-mode');

// 	// Ubah teks button sesuai mode
// 	if (body.classList.contains('dark-mode')) {
// 		themeToggleBtn.textContent = '🌜';
// 	} else {
// 		themeToggleBtn.textContent = '🌞';
// 	}
// });

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

function updateClock() {
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	document.getElementById("digital-clock").innerText = hours + ":" + minutes + ":" + seconds;
}
setInterval(updateClock, 1000);
updateClock();

let navbar = document.getElementById("main-navbar");
    let lastScrollTop = 0;
    let scrollTimeout;

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Jika sedang scroll, sembunyikan navbar
        navbar.style.top = "-100px"; 

        // Hapus timeout sebelumnya jika ada
        clearTimeout(scrollTimeout);

        // Set timeout untuk cek apakah scroll berhenti
        scrollTimeout = setTimeout(() => {
            navbar.style.top = "0"; // Munculkan kembali navbar setelah berhenti scroll
        }, 500);

        lastScrollTop = scrollTop;
    });


	const texts = ["SMK Pusat Keunggulan", "Pendidikan Berkualitas", "Generasi Emas 2025"];
let index = 0;
const textRotator = document.getElementById("text-rotator");

function changeText() {
    textRotator.style.animation = "erase 1s forwards"; // Animasi menghapus teks lama

    setTimeout(() => {
        index = (index + 1) % texts.length;
        textRotator.innerText = texts[index];
        textRotator.style.animation = "typing 1s steps(30) 1s forwards, blink 0.7s step-end infinite"; // Animasi mengetik teks baru
    }, 1000); // Tunggu 1 detik sebelum mengganti teks
}

textRotator.innerText = texts[index]; // Set teks awal
setInterval(changeText, 6000); // Ganti teks setiap 3 detik




