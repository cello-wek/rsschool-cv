const menuBtn = document.querySelector('.menu__btn');
if(menuBtn){
	const menuNav = document.querySelector('.nav-menu');
	menuBtn.addEventListener("click", function(e){
		menuBtn.classList.toggle('--active');
		menuNav.classList.toggle('--active');
	});

}
