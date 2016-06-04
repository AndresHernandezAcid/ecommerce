var texto;

$(document).ready(function() {

tienda = new Tienda();
// [["a","1","101"],["b","1","202"]] asi se ve el arreglo
	tienda.administrador.agregarProducto(new Producto("a","1","101"));
	tienda.administrador.agregarProducto(new Producto("b","1","202"));
	tienda.administrador.agregarProducto(new Producto("c","1","303"));
	tienda.administrador.agregarProducto(new Producto("d","1","104"));
	tienda.administrador.agregarProducto(new Producto("e","1","205"));
	tienda.administrador.agregarProducto(new Producto("f","1","306"));
	tienda.administrador.agregarProducto(new Producto("g","1","107"));
	tienda.administrador.agregarProducto(new Producto("h","1","208"));
	tienda.administrador.agregarProducto(new Producto("i","1","309"));

	var dibujarBogega = function(bodega){
		for (var i = bodega.contenido.length - 1; i >= 0; i--) {
			var productoB = bodega.contenido[i]);
			
			return productoB;	

		}
	}



	$("#search").keypress(function(e) {
	  if(e.which == 13) {
	    //Get
		texto = $('#search').val();
		imprimirTexto();
	  }
	});

	dibujarBogega(tienda.administrador.bodega);

	 
	 $("#agregar1").click(function(e){
	 	tienda.administrador.existeProducto()
	 });
	

});

var imprimirTexto = function(){
	console.log(texto);
}


