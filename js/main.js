//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

// click event for tabs nav in menu page

document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tab_label');

	tabs.forEach((tab) => {
		tab.addEventListener('click', function () {
			const targetId = this.getAttribute('data-target');
			const targetSection = document.getElementById(targetId);

			if (targetSection) {
				targetSection.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
});
