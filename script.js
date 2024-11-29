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

    // Validar si los campos están vacíos
    if (!nombre || !apellido || !empresa || !mensaje) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos antes de enviar su consulta.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return; // Detener la ejecución si hay campos vacíos
    }

    //objeto con los datos del formulario
    const datosContacto = {
        nombre: nombre,
        apellido: apellido,
        empresa: empresa,
        mensaje: mensaje
    };

    // se almacena los datos en localStorage como JSON
    localStorage.setItem("contacto", JSON.stringify(datosContacto));

    // alert
    
    console.log("Formulario enviado, mostrando alerta");
    Swal.fire({
      title: "¡Mensaje enviado!",
      text: "Tu mensaje se ha enviado con éxito.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    

    // reseteo el formulario
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

//dejo estos
const botonArmarPack = document.getElementById("botonArmarPack");
const botonFinalizarCompra = document.getElementById("finalizarCompra");

botonArmarPack.addEventListener("click", armarPack);
botonFinalizarCompra.addEventListener("click", finalizarCompra);


function armarPack() {
  const checkboxes = document.querySelectorAll('.form-check-input');
  const carrito = document.getElementById('carrito');
  const precioTotalDisplay = document.getElementById('precioTotal');

  let serviciosSeleccionados = [];
  let precioTotal = 0;

  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          const [servicio, precio] = checkbox.value.split('|');
          serviciosSeleccionados.push(servicio);
          precioTotal += parseFloat(precio);
      }
  });
  // ahi uso la clase PackAlternativo
  const pack = new PackAlternativo('Pack Personalizado', serviciosSeleccionados);

  // calculo precio total en un metodo en la clase packAlternativo
  pack.precioTotal = precioTotal.toFixed(2);

  // guardo el pack en el localStorage
  localStorage.setItem('packArmado', JSON.stringify(pack));

  // aca se actualiza el carrito en el DOM. aca compruebo si el array serviciosSeleccionados tiene al menos un servicio 
  if (serviciosSeleccionados.length > 0) {
    carrito.innerHTML = `
      <ul>
        ${serviciosSeleccionados.map(servicio => `<li>${servicio}</li>`).join('')}
      </ul>
    `;
    precioTotalDisplay.textContent = `Precio Total: $${pack.precioTotal}`;
  } else {
    carrito.innerHTML = '<p>No hay servicios seleccionados.</p>';
    precioTotalDisplay.textContent = 'Precio Total: $0';
  }
}
const packGuardado = JSON.parse(localStorage.getItem('packArmado'));
console.log(packGuardado);


function finalizarCompra() {
  const carrito = document.getElementById('carrito');
  const precioTotalDisplay = document.getElementById('precioTotal');

  if (carrito.innerHTML.trim() === '' || precioTotalDisplay.textContent === 'Precio Total: $0') {
      
      Swal.fire({
        title: 'Error',
        text: 'Tu carrito está vacío. Por favor selecciona servicios.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
  } else {
      // obtengo los servicios seleccionados desde el dom
      const checkboxes = document.querySelectorAll('.form-check-input');
      let detalleServicios = [];
      let precioTotal = 0;

      checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
              const [servicio, precio] = checkbox.value.split('|');
              detalleServicios.push({
                  nombre: servicio,
                  precio: parseFloat(precio)
              });
              precioTotal += parseFloat(precio);
          }
      });

      // creo el obj
      const compra = {
          servicios: detalleServicios,
          precioTotal: precioTotal.toFixed(2)
      };

      // guardo la compra en el localStorage
      localStorage.setItem('compraFinalizada', JSON.stringify(compra));

      // confirmacion y reinicio del carrito
      Swal.fire({
        title: '¡Compra Finalizada!',
        text: '¡Gracias por tu compra! Los detalles de tu pack han sido guardados.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      carrito.innerHTML = '<p>No hay servicios seleccionados.</p>';
      precioTotalDisplay.textContent = 'Precio Total: $0';
  }
}
const compraFinalizada = JSON.parse(localStorage.getItem('compraFinalizada'));
console.log(compraFinalizada);



//-------------------------------------------------------------------------------------------------------- //// Obtener datos desde la API usando fetch


// Seleccionamos los elementos del DOM
const getDataButton = document.getElementById('getData');
const createDataButton = document.getElementById('createData');
const outputDiv = document.getElementById('output');

// Endpoint base de la API
const apiBaseUrl = 'https://6748dd015801f515359267a4.mockapi.io/c1/productos';

// Función para mostrar datos en pantalla
function displayData(data) {
  outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

// Obtener datos de la API
getDataButton.addEventListener('click', () => {
  fetch(apiBaseUrl)
    .then(response => {
      if (!response.ok) throw new Error('Error al obtener los datos');
      return response.json();
    })
    .then(data => {
      console.log('Datos obtenidos:', data);
      displayData(data); // Muestra los datos en el div
    })
    .catch(error => {
      console.error('Error:', error);
      outputDiv.innerHTML = `Error: ${error.message}`;
    });
});

// Crear nuevos datos en la API
createDataButton.addEventListener('click', () => {
  const newUser = {
    name: 'Nuevo Usuario',
    email: 'nuevo.usuario@example.com'
  };

  fetch(apiBaseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(response => {
      if (!response.ok) throw new Error('Error al crear el recurso');
      return response.json();
    })
    .then(data => {
      console.log('Usuario creado:', data);
      outputDiv.innerHTML = 'Usuario creado con éxito';
    })
    .catch(error => {
      console.error('Error:', error);
      outputDiv.innerHTML = `Error: ${error.message}`;
    });
});


