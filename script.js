//-------------------------------------------------------------------------------------------------------- //
//document.getElementById("contact-form").addEventListener("submit", function(event) {
    // prevenir que el formulario realice la acción por defecto (refrescar la página x ej)
    //event.preventDefault();

    //agarrar los valores de los campos del formulario
    //const nombre = document.getElementById("first-name").value;
    //const apellido = document.getElementById("last-name").value;
    //const empresa = document.getElementById("company").value;
    //const mensaje = document.getElementById("message").value;

    //objeto con los datos del formulario
    //const datosContacto = {
       // nombre: nombre,
        //apellido: apellido,
        //empresa: empresa,
       // mensaje: mensaje
    //};

    // Almacenar los datos en LocalStorage como JSON
    //localStorage.setItem("contacto", JSON.stringify(datosContacto));

    // Mostrar el alert
    //alert("Su mensaje se ha enviado con éxito");

    // Resetear el formulario
    //document.getElementById("contact-form").reset();
//});

//-------------------------------------------------------------------------------------------------------- //

// ---------> ACA ESTOY TRATANDO DE ARMAR LOS PACKS PARA PONER DESPUES EN EL CARRITO DE COMPRA <----------
class Producto {

    // CREO Q ACA ME FALTARIA DECLARAR LOS ATRIBUTOS NO? 
    // constructor
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

// ---------> CREANDO LAS INSTANCIAS DE PRODUCTOS (LOS PACKS DE GRAFICO Y PUBLICITARIO) <----------
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

//-------------------------------------------------------------------------------------------------------- //

// funcion para manejar la creación del pack
//function armarPack() {
    //const checkboxes = document.querySelectorAll('.form-check-input');
    //const seleccionados = [];
  
    //checkboxes.forEach((checkbox, index) => {
      //if (checkbox.checked) {
        //seleccionados.push(`Opción ${index + 1}`);
      //}
    //}
    //);
  
    //if (seleccionados.length > 0) {
      //const listaPacks = obtenerPacksDelStorage();
      //const nuevoPack = new PackAlternativo(`Pack${listaPacks.length + 1}`, seleccionados);
     //listaPacks.push(nuevoPack);
      //guardarPacksEnStorage(listaPacks);
      //alert(`¡Pack ${listaPacks.length} creado con éxito!`);
    //} else {
      //alert('Por favor selecciona al menos una opción para crear un pack.');
    //}
  //}
  
  // Asignar evento al botón "Armar Pack"
  //document.getElementById('botonArmarPack').addEventListener('click', armarPack);
  
  //funciones relacionadas con LocalStorage
  //function obtenerPacksDelStorage() {
    //const packs = localStorage.getItem('packs');
    //return packs ? JSON.parse(packs) : [];
  //}
  
  //function guardarPacksEnStorage(listaPacks) {
    //localStorage.setItem('packs', JSON.stringify(listaPacks));
  //}
  
//-------------------------------------------------------------------------------------------------------- //

  // clase DEL "ARMA TU PROPIO PACK"
  class PackAlternativo {
    constructor(nombre, items) {
      this.nombre = nombre;
      this.items = items;
    }
  }


  // --------> SIMULACION DEL FORMULARIO. Lo hago mediante promts para no usar DOM   <---------
  function manejarFormulario() {
    // Pido los datos al usuario mediante prompts
    const nombre = prompt("Ingresa tu nombre:");
    const apellido = prompt("Ingresa tu apellido:");
    const empresa = prompt("Ingresa tu empresa:");
    const mensaje = prompt("Escribe tu mensaje:");
  
    // alert msj de éxito
    alert("Su mensaje se envió con éxito");
  
    // muestro los datos en la consola
    console.log({
      Nombre: nombre,
      Apellido: apellido,
      Empresa: empresa,
      Mensaje: mensaje,
    });
  }
  
  // Llamar a la funcion al cargar la pag
  manejarFormulario();
  

////////////////
function armarPack() {
    let pack = []; // Array para almacenar los productos seleccionados
    let continuar = true;
  
    while (continuar) {
      // Mostrar menú de opciones
      const opcion = prompt(
        "Seleccione el número del producto que desea agregar al pack:\n" +
        "1. Producto 01\n" +
        "2. Producto 02\n" +
        "3. Producto 03\n" +
        "4. Producto 04\n" +
        "5. Producto 05\n" +
        "6. Producto 06\n" +
        "7. Producto 07\n" +
        "8. Producto 08\n" +
        "9. Producto 09\n" +
        "0. Finalizar selección"
      );
  
      switch (opcion) {
        case "1":
          pack.push("01");
          alert("Producto 01 agregado.");
          break;
        case "2":
          pack.push("02");
          alert("Producto 02 agregado.");
          break;
        case "3":
          pack.push("03");
          alert("Producto 03 agregado.");
          break;
        case "4":
          pack.push("04");
          alert("Producto 04 agregado.");
          break;
        case "5":
          pack.push("05");
          alert("Producto 05 agregado.");
          break;
        case "6":
          pack.push("06");
          alert("Producto 06 agregado.");
          break;
        case "7":
          pack.push("07");
          alert("Producto 07 agregado.");
          break;
        case "8":
          pack.push("08");
          alert("Producto 08 agregado.");
          break;
        case "9":
          pack.push("09");
          alert("Producto 09 agregado.");
          break;
        case "0":
          continuar = false;
          alert("Finalizando selección...");
          break;
        default:
          alert("Opción inválida. Intente de nuevo.");
      }
    }
  
    // Mostrar el resultado
    if (pack.length > 0) {
      alert("Su pack se armó con éxito.");
      console.log(`Pack armado: ${pack.join(", ")}`);
    } else {
      alert("No seleccionaste ningún producto.");
      console.log("Pack vacío.");
    }
  }
  
  // Llamar a la función manualmente o desde un botón
  armarPack();
  