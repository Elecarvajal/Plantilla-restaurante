$(document).ready(function(){

// Efecto Menu
	$('.menu a').each(function(index, elemento) {
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 2000 + (index * 500));
	});

// Efecto Header
	if( $(window).width() > 800 ) {
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
	}

// Scroll Elementos Menu
	var acercaDe = $('#acerca-de').offset().top;
	var menu = $('#platillos').offset().top;
	var galeria = $('#galeria').offset().top;
	var ubicacion = $('#ubicacion').offset().top;

	$(window).on('resize', function() {
		acercaDe = $('#acerca-de').offset().top;
		menu = $('#platillos').offset().top;
		galeria = $('#galeria').offset().top;
		ubicacion = $('#ubicacion').offset().top;
	});

	$('#btn-acerca-de').on('click', function(e) {
		e.preventDefault();
		var windowWidth = $(window).width();

		if( windowWidth > 800 ) {
			$('html, body').animate({
				scrollTop: acercaDe - 200
			}, 500);
		}
		else if( windowWidth > 600 ) {
			$('html, body').animate({
				scrollTop: acercaDe + 200
			}, 500);			
		}		
		else if( windowWidth > 500 ) {
			$('html, body').animate({
				scrollTop: acercaDe + 150
			}, 500);			
		}
		else if( windowWidth > 450 ) {
			$('html, body').animate({
				scrollTop: acercaDe + 210
			}, 500);		
		}
		else if( windowWidth > 400 ) {
			$('html, body').animate({
				scrollTop: acercaDe + 190
			}, 500);			
		}
		else if( windowWidth > 350 ){
			$('html, body').animate({
				scrollTop: acercaDe + 150
			}, 500);	
		}
		else {
			$('html, body').animate({
				scrollTop: acercaDe + 120
			}, 500);				
		}
	});

	$('#btn-menu').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu
		}, 500);
	});

	$('#btn-galeria').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 500);
	});

	$('#btn-ubicacion').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 500);
	});
});