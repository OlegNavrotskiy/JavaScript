$(document).ready(function () {
	$('[href="#sheldure"], .main_btn, .main_btna').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').animate(
			{
				opacity: 'toggle',
				height: 'slow',
			}
		);
	});
	$('.close').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideUp("slow");
	});
	$('.back').on('click', () => {
		$('.thanks').slideUp('slow');
		$('.overlay').fadeToggle('slow');
	});

});
$('form').submit(function(event) {
	event.preventDefault();
	let msg   = $('form').serialize();
	$.ajax({ //  сам запрос
		type: 'POST',
		url: "server.php",
		data: msg, // данные которые передаём  серверу
	}).done(function() { // если успешно
		$('.thanks').slideDown('slow');
		$('.modal').hide('slow');
		console.log('Ответ получен');
	}).fail(function() { // если ошибка передачи
		alert('Ошибка выполнения запроса!');
	});
});
