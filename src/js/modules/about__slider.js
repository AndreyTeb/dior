import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function aboutSlider () {
	const swiper = new Swiper(".about__slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true,
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
  });
}

export default aboutSlider ;