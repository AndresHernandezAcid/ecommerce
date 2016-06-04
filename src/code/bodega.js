var Bodega = function(){
	this.contenido = [];

}

Bodega.prototype.ponerProducto = function(producto) {
	this.contenido.push(producto);
};

Bodega.prototype.quitarProducto = function(indice) {
	return this.contenido.splice(indice,1)[0];
};




