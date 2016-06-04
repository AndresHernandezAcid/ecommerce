var Usuario = function(nombre,contraseña) {
	this.nombre = nombre;
	this.contraseña = contraseña;
	
	this.carrito = new Carrito(); 
}

Usuario.prototype.existeProducto = function(nombreProducto) {
	for(var i = 0; i < this.carrito.contenido.length; i++){
		if(this.carrito.contenido[i].nombre === nombreProducto){
			return i;
		}
	}
	return -1;
};


Usuario.prototype.agregarProducto = function(producto) {
	
	this.carrito.ponerProducto(producto);
};

Usuario.prototype.quitarProducto = function(nombre) {
	
	var indice = this.existeProducto(nombre);
	
	if(indice !== -1){
		var productoQuitado = this.carrito.quitarProducto(indice);
		return productoQuitado;
	} else{
		return null;
	}
	
};


