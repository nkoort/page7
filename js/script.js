$(document).ready(function() {
	$('.header__menu-burger').click(function(event) {
		$('.header__menu-burger, .header__menu, .header__login, .header__menu-line-links').toggleClass('active');
	});
});