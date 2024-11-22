import { Producto } from "./Producto.js";
import PackAlternativo from "./packAlternativo.js";


document.getElementById("contact-form").addEventListener("submit", function(event) {
    // prevenir que el formulario realice la acción por defecto (refrescar la página x ej)
    event.preventDefault();

    //agarrar los valores de los campos del formulario
    const nombre = document.getElementById("first-name").value;
    const apellido = document.getElementById("last-name").value;
    const empresa = document.getElementById("company").value;
    const mensaje = document.getElementById("message").value;

    //objeto con los datos del formulario
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

    // Resetear el formulario
    document.getElementById("contact-form").reset();
});

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

// funcion para manejar la creación del pack
function armarPack() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const seleccionados = [];
  
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        seleccionados.push(`Opción ${index + 1}`);
      }
    }
    );
  
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
  
  //Asignar evento al botón "Armar Pack"
  document.getElementById('botonArmarPack').addEventListener('click', armarPack);
  
  //funciones relacionadas con LocalStorage
  function obtenerPacksDelStorage() {
    const packs = localStorage.getItem('packs');
    return packs ? JSON.parse(packs) : [];
  }
  
  function guardarPacksEnStorage(listaPacks) {
    localStorage.setItem('packs', JSON.stringify(listaPacks));
  }
  