
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
  

  
  // Exportamos la clase y las instancias
  export { Producto, packGrafico, packPublicitario };
  