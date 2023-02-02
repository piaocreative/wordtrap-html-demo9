$( document ).ready( function() {
	if ( $( '.navbar-expanded' ).length) {
		$( '#navbarCollapse' ).on( 'shown.bs.collapse', function(event) {
			$( '.navbar-expanded' ).addClass('collapsed');
		});
		
		$( '#navbarCollapse' ).on( 'hide.bs.collapse', function(event) {
			$( '.navbar-expanded' ).removeClass('collapsed');
		});
	}
	
	// Banner Slider
	if ( $( '#banner-slider' ).length ) {
		$( '#banner-slider' ).slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 1000,
			fade: true,
			cssEase: 'linear',
			autoplay: true
		});
	}

	// Logos
	if ( $( '.logos' ).length ) {
		$( '.logos' ).slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						infinite: true,
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	// Events
	if ( $( '#events' ).length ) {
		$( '#events' ).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true
		});
	}

	// Product Categories Slider
	if ( $( '#product_categories' ).length ) {
		$( '#product_categories' ).slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			autoplay: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 992,
					settings: {
						infinite: true,
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	// Range Slider
	if ( $( '[data-slider]' ).length ) {
		$( '[data-slider]' ).slider({});

		$( '#price_slider' ).on( 'slide', function( evt ) {
			$( '#price_slider_value span' ).html( '$' + evt.value[0] + ' - ' + '$' + evt.value[1] );
		});
	}

	// QTY
	if ( $('.quantity').length ) {
		$('.quantity  #plus-btn').click(function(evt) {
			evt.preventDefault();
			$('.qty').val(parseInt($('.qty').val()) + 1 );
		});
		$('.quantity #minus-btn').click(function(evt) {
			evt.preventDefault();
			$('.qty').val(parseInt($('.qty').val()) - 1 );
			if ($('.qty').val() == 0) {
				$('.qty').val(1);
			}
		});
	}

} );