$(document).ready(function(){

	var deadline = '2016-09-15 00:00';

	function getTimeRemaining(endtime){
		
	  var t = Date.parse(endtime) - Date.now();
	  var minutes = Math.ceil( t / 60000 );
	  var hours = Math.ceil( t / 3600000 );
	  var days = Math.ceil( t / 86400000 );

	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	  };
	}

	function updateClock(){
		var t = getTimeRemaining(deadline);

		var daysSpan = $('.dias');
		var hoursSpan = $('.horas');
		var minutesSpan = $('.minutos');

		daysSpan.text( t.days );
		hoursSpan.text( t.hours );
		minutesSpan.text( t.minutes );
	}

	updateClock();
	var timeinterval = setInterval(updateClock,1000);

	$('a.mostrar_span').on( 'click', function( e ){
		e.preventDefault();
		if( $(this).parents('span').hasClass('open') ){
			$(this).parents('span').removeClass('open');
		}else{
			$(this).parents('span').addClass('open');
		}
	});
	$('section span a').addClass('shake-slow shake-constant--hover');
});