import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function topSlider () {
	const swiper = new Swiper('.top__slider', {
		slidesPerView: 1,
		loop: false,
		effect: 'fade',
		autoplay:{
			delay: 4500,
			disableOnInteraction: false,
		},
		pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
				enabled: true,
    },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			300: {
				pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
				enabled: true,
    },
			},
			992: {
				pagination: {
				enabled: false,
    },
			}
		},
	});
}

export default topSlider;