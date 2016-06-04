var Carrito = function(){
	this.contenido = [];

}

Carrito.prototype.ponerProducto = function(producto) {
	this.contenido.push(producto);
};

Carrito.prototype.quitarProducto = function(indice) {
	return this.contenido.splice(indice,1)[0];
};