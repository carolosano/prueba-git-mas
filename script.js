document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevenir que el formulario realice la acción por defecto (refrescar la página)
    event.preventDefault();

    // Capturar los valores de los campos del formulario
    const nombre = document.getElementById("first-name").value;
    const apellido = document.getElementById("last-name").value;
    const empresa = document.getElementById("company").value;
    const mensaje = document.getElementById("message").value;

    // Crear un objeto con los datos del formulario
    const datosContacto = {
        nombre: nombre,
        apellido: apellido,
        empresa: empresa,
        mensaje: mensaje
    };

    // Almacenar los datos en LocalStorage como JSON
    localStorage.setItem("contacto", JSON.stringify(datosContacto));

    // Mostrar el alert
    alert("Su mensaje se ha enviado con éxito");

    // (Opcional) Resetear el formulario
    document.getElementById("contact-form").reset();
});


//let numero = prompt("Ingresa su edad: ")


//objetos para los packs

//let packs = {
   // nombre: "Gráfico",
  //  precio: 200,
//}

class Producto {

    

    // Constructor
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

export default Producto
const packGrafico = new Producto(
    "Gráfico",
    ["Diseño de Logotipo", "Tarjetas Personales", "Manual de Marca"],
    150.00
);

const packPublicitario = new Producto(
    "Publicitario",
    ["Diseño de Flyer", "Post para Redes Sociales", "Banner Publicitario"],
    200.00
);

packGrafico.mostrarDetalles();


packPublicitario.mostrarDetalles();


// Función para manejar la creación del pack
function armarPack() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const seleccionados = [];
  
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        seleccionados.push(`Opción ${index + 1}`);
      }
    });
  
    if (seleccionados.length > 0) {
      const listaPacks = obtenerPacksDelStorage();
      const nuevoPack = new PackAlternativo(`Pack${listaPacks.length + 1}`, seleccionados);
      listaPacks.push(nuevoPack);
      guardarPacksEnStorage(listaPacks);
      alert(`¡Pack ${listaPacks.length} creado con éxito!`);
    } else {
      alert('Por favor selecciona al menos una opción para crear un pack.');
    }
  }
  
  // Asignar evento al botón "Armar Pack"
  document.getElementById('botonArmarPack').addEventListener('click', armarPack);
  
  // Funciones relacionadas con LocalStorage
  function obtenerPacksDelStorage() {
    const packs = localStorage.getItem('packs');
    return packs ? JSON.parse(packs) : [];
  }
  
  function guardarPacksEnStorage(listaPacks) {
    localStorage.setItem('packs', JSON.stringify(listaPacks));
  }
  
  // Clase PackAlternativo
  class PackAlternativo {
    constructor(nombre, items) {
      this.nombre = nombre;
      this.items = items;
    }
  }
  