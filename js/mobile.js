const openNav = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const bar = document.querySelector('.fa-bars');


openNav.addEventListener('click', function(){
	navLinks.classList.toggle('showNav');
	if(navLinks.classList.contains('showNav')) {
		bar.classList.replace('fa-bars', 'fa-remove');
		openNav.style.right = '80%';
	} else {
		bar.classList.replace('fa-remove', 'fa-bars');
		openNav.style.right = '30px';
	}
});
