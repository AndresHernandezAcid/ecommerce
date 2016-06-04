var Administrador = function(){

	this.bodega = new Bodega();

}

Administrador.prototype.existeProducto = function(nombreProducto) {
	for(var i = 0; i < this.bodega.contenido.length; i++){
		if(this.bodega.contenido[i].nombre === nombreProducto){
			return i;
		}
	}
	return -1;
};


Administrador.prototype.agregarProducto = function(producto) {
	
	this.bodega.ponerProducto(producto);
};

Administrador.prototype.quitarProducto = function(nombre) {
	
	var indice = this.existeProducto(nombre);
	
	if(indice !== -1){
		var productoQuitado = this.bodega.quitarProducto(indice);
		return productoQuitado;
	} else{
		return null;
	}
	
};

Administrador.prototype.registro = function(usuario) {
	
	var nombre = usuario.nombre;
	var contraseña = usuario.contraseña;

	var registro = nombre + contraseña;
		return	registro;
};

Administrador.prototype.agregarRegistro = function(registro) {
	
	var registro = administrador.registro();

	repositorio.baseDatos.push(registro);
};