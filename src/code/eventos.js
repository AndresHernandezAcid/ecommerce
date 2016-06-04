var texto;

$(document).ready(function() {

	$("#search").keypress(function(e) {
	  if(e.which == 13) {
	    //Get
		texto = $('#search').val();
		imprimirTexto();
	  }
	});

});

var imprimirTexto = function(){
	console.log(texto);
}

