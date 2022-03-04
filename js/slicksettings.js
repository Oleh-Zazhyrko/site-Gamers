$(".team-carousele").slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,

	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 375,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});
