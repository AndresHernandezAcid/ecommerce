(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Administrador = function(){

	this.bodega = new Bodega();

}

Administrador.prototype.existeProducto = function(idProducto) {
	for(var i = 0; i < this.bodega.contenido.length; i++){
		if(this.bodega.contenido[i].id === idProducto){
			return this.bodega.contenido[i];
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
},{}],2:[function(require,module,exports){
var Bodega = function(){
	this.contenido = [];
}

Bodega.prototype.ponerProducto = function(producto) {
	this.contenido.push(producto);
};

Bodega.prototype.quitarProducto = function(indice) {
	return this.contenido.splice(indice,1)[0];
};



},{}],3:[function(require,module,exports){
var Carrito = function(){
	this.contenido = [];

}

Carrito.prototype.ponerProducto = function(producto) {
	this.contenido.push(producto);
};

Carrito.prototype.quitarProducto = function(indice) {
	return this.contenido.splice(indice,1)[0];
};
},{}],4:[function(require,module,exports){
var texto;

$(document).ready(function() {

tienda = new Tienda();
	tienda.administrador.agregarProducto(new Producto("a","1","101"));
	tienda.administrador.agregarProducto(new Producto("b","1","202"));
	tienda.administrador.agregarProducto(new Producto("c","1","303"));
	tienda.administrador.agregarProducto(new Producto("d","1","104"));
	tienda.administrador.agregarProducto(new Producto("e","1","205"));
	tienda.administrador.agregarProducto(new Producto("f","1","306"));
	tienda.administrador.agregarProducto(new Producto("g","1","107"));
	tienda.administrador.agregarProducto(new Producto("h","1","208"));
	tienda.administrador.agregarProducto(new Producto("i","1","309"));

	




	$("#search").keypress(function(e) {
	  if(e.which == 13) {
	    //Get
		texto = $('#search').val();
		imprimirTexto();
	  }
	});

	 
	 $("#agregar1").click(function(e){
	 	tienda.administrador.existeProducto()
	 });
	

});

var imprimirTexto = function(){
	console.log(texto);
}



},{}],5:[function(require,module,exports){
var contador = 1
var Producto = function(nombre,cantidad,precio){

	this.id = contador;
	this.nombre = nombre;
	this.cantidad = cantidad;
	this.precio = precio;

	contador++;
}
},{}],6:[function(require,module,exports){
var Repositorio = function(){
	this.baseDatos = [];
}
},{}],7:[function(require,module,exports){
var Tienda = function () {
	
	this.usuario = new Usuario();
	this.administrador = new Administrador();
	this.repositorio = new Repositorio();
}


},{}],8:[function(require,module,exports){
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



},{}]},{},[1,2,3,4,5,6,7,8]);
