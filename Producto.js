// producto.js
class Producto {
    constructor(nombrePack, elementos, precio) {
      this.nombrePack = nombrePack;
      this.elementos = elementos;
      this.precio = precio;
    }
  
    mostrarDetalles() {
      console.log(`Pack: ${this.nombrePack}`);
      console.log(`Incluye: ${this.elementos.join(", ")}`);
      console.log(`Precio: $${this.precio}`);
    }
  }
  
  const packGrafico = new Producto(
    "Gráfico",
    ["Diseño de Logotipo", "Tarjetas Personales", "Manual de Marca"],
    150.0
  );
  
  const packPublicitario = new Producto(
    "Publicitario",
    ["Diseño de Flyer", "Post para Redes Sociales", "Banner Publicitario"],
    200.0
  );
  
  // Exportamos la clase y las instancias
  export { Producto, packGrafico, packPublicitario };
  