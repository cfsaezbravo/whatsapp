$(document).ready(function(){

	$('#send').on('click', function(val){
		var comentario = $('#respuestas').val()

		$('.respuestasintegradas').append('<li class="answer"><span class="minombre">Cami Sáez</span><br>'+comentario+'</li>');

		$('#respuestas').val('');
	})

	$('.conversacion2').on('click', function(){
		$('.conversaciones').replaceWith($('conversaciones2').attr('display', 'show'));

	})

});

