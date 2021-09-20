const menuBtn = document.querySelector('.menu__btn');
const menuItems = document.querySelectorAll('.nav-link');
const menuNav = document.querySelector('.nav-menu');

if (menuBtn) {

	menuBtn.addEventListener("click", function (e) {
		menuBtn.classList.toggle('--active');
		menuNav.classList.toggle('--active');

	});
}
if (menuItems) {
	menuItems.forEach(el => el.addEventListener("click", function (e) {
		menuNav.classList.toggle('--active');
	}));
}
