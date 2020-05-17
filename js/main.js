// Set opacity at #navbar after scrolling
document.addEventListener('scroll', () => {
	if (window.scrollY > 70) {
		document.querySelector('header #navbar').style.opacity = 0.9;
	} else {
		document.querySelector('header #navbar').style.opacity = 1;
	}
});
