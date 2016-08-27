$(document).ready(function(){
	$('a.mostrar_span').on( 'click', function( e ){
		e.preventDefault();
		if( $(this).parents('span').hasClass('open') ){
			$(this).parents('span').removeClass('open');
		}else{
			$(this).parents('span').addClass('open');
		}
	});
});