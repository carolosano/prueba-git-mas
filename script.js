import { Producto } from "./Producto.js";

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

packGrafico.mostrarDetalles();
packPublicitario.mostrarDetalles();

//-------------------------------------------------------------------------------------------------------- //


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
      // menU de opciones
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
  