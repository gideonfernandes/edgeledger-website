// Set opacity at #navbar after scrolling
document.addEventListener('scroll', () => {
	if (window.scrollY > 70) {
		document.querySelector('header #navbar').style.opacity = 0.9;
	} else {
		document.querySelector('header #navbar').style.opacity = 1;
	}
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 70
      },
      800
    );
  }
});