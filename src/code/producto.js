var contador = 1
var Producto = function(nombre,cantidad,precio){

	this.id = contador;
	this.nombre = nombre;
	this.cantidad = cantidad;
	this.precio = precio;

	contador++;
}