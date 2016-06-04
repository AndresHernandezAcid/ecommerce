describe("Administrador", function() {
  var administrador;

  beforeEach(function() {
    administrador = new Administrador();
    usuario = new Usuario("Julia","Torres");
    repositorio = new Repositorio();
  });


  describe("admin agregar productos bodega", function() {

    it("cuando la bodega esta vacia y agrego 1 cuadro, la bodega deberia tener ese cuadro", function() {
      var producto = new Producto("noche estrellada", 1 , 1000); 
      administrador.agregarProducto(producto);
      var existe = administrador.existeProducto("noche estrellada");
      expect(existe).toBe(0);
    });

    it("cuando la bodega tiene productos y busco uno que no existe en ella, no deberia encontrarlo", function() {
      var producto = new Producto("noche estrellada", 1 , 1000); 
      administrador.agregarProducto(producto);

      administrador.agregarProducto(new Producto("mujer de blanco",1,3000));

      var existe = administrador.existeProducto("monalisa");
      expect(existe).toBe(-1);
    });

  });

  describe("admin quitar productos bodega", function() {

    it("cuando la bodega tiene productos y busco uno que existe en ella,deberia quitarlo", function() {
      
      var producto = new Producto("noche estrellada", 1 , 1000); 
      administrador.agregarProducto(producto);

      administrador.agregarProducto(new Producto("mujer de blanco",1,3000));

      var productoResultado = administrador.quitarProducto("noche estrellada");
      expect(productoResultado.nombre).toBe("noche estrellada");
      expect(productoResultado.precio).toBe(1000);
      expect(productoResultado.cantidad).toBe(1);
      expect(administrador.bodega.contenido.length).toBe(1);
    });

    it("cuando la bodega tiene productos e intenta quitar uno que no existe en ella, no deberia hacer nada", function() {
      var producto = new Producto("noche estrellada", 1 , 1000); 
      
      administrador.agregarProducto(producto);

      administrador.agregarProducto(new Producto("mujer de blanco",1,3000));

      var productoResultado = administrador.quitarProducto("monalisa");
      expect(productoResultado).toBe(null);
    });

  });
 //================================================================================//   

  describe("Relacion administrador, usuario, repositorio ", function(){

    it("cuando el usuario tiene un nombre y una contraseña el administrador tiene un registro", function() {
      
      var registro = administrador.registro(usuario);
      expect(registro).toBe("JuliaTorres");
    });

    it("cuando el administrador tiene un registro de usuario lo guarda en el repositorio", function() {
      
      var registro = administrador.registro(usuario);
      repositorio.baseDatos.push(registro);
      expect(repositorio.baseDatos.length).toBe(1);
      
    });

  });
  //============================================================================//
  describe("User agregar productos carrito", function() {

    it("cuando el carrito esta vacio y agrego 1 cuadro, el carrito deberia tener ese cuadro", function() {
      var producto = new Producto("noche estrellada", 1 , 1000); 
      usuario.agregarProducto(producto);
      var existe = usuario.existeProducto("noche estrellada");
      expect(existe).toBe(0);
    });

    it("cuando el carrito tiene productos y busco uno que no existe en ella, no deberia encontrarlo", function() {
      var producto = new Producto("noche estrellada", 1 , 1000); 
      usuario.agregarProducto(producto);

      usuario.agregarProducto(new Producto("mujer de blanco",1,3000));

      var existe = usuario.existeProducto("monalisa");
      expect(existe).toBe(-1);
    });

  });

  describe("User quitar productos carrito", function() {

    it("cuando el carrito tiene productos y busco uno que existe en ella,deberia quitarlo", function() {
      
      var producto = new Producto("noche estrellada", 1 , 1000); 
      usuario.agregarProducto(producto);

      usuario.agregarProducto(new Producto("mujer de blanco",1,3000));

      var productoResultado = usuario.quitarProducto("noche estrellada");
      expect(productoResultado.nombre).toBe("noche estrellada");
      expect(productoResultado.precio).toBe(1000);
      expect(productoResultado.cantidad).toBe(1);
      expect(usuario.carrito.contenido.length).toBe(1);
    });

    it("cuando el carrito tiene productos e intenta quitar uno que no existe en ella, no deberia hacer nada", function() {
      var producto = new Producto("noche estrellada", 1 , 1000); 
      
      usuario.agregarProducto(producto);

      usuario.agregarProducto(new Producto("mujer de blanco",1,3000));

      var productoResultado = usuario.quitarProducto("monalisa");
      expect(productoResultado).toBe(null);
    });

  });

});
