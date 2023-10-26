const validarPropiedad = (objeto) => {
  if (objeto.title) {
    return objeto.title;
  }
};

const validarPrecio = (objeto) => {
  if (objeto.price) {
    return objeto.price;
  }
};

function nodosProductos(array, contenedor) {
  const categoriasMostradas = ["electronics", "jewelery"];

  const productosFiltrados = array.filter((producto) => {
    return categoriasMostradas.includes(producto.category);
  });

  for (let i = 0; i < productosFiltrados.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
       <h3>
        ${validarPropiedad(productosFiltrados[i])}  
       </h3>
       <div class="container-img">
         <img src=${productosFiltrados[i].image} alt=${validarPropiedad(
      productosFiltrados[i]
    )}>
       </div>
       <p>
       ${validarPrecio(productosFiltrados[i])}
       </p>
      `;

    contenedor.appendChild(card);
  }
}

nodosProductos(products, document.getElementById("container-productos"));

alert("Bienvenido a Dinastia\n Su Tienda en Linea");

function categoriaDisponibles(array) {
  const categorias = [];

  for (let i = 0; i < array.length; i++) {
    const categoria = array[i].category;
    if (!categorias.includes(categoria)) {
      categorias.push(categoria);
    }
  }

  const categoriasTitulo = categorias.join(", ");

  alert(`Categorías de productos disponibles:\n ${categoriasTitulo}`);
}

categoriaDisponibles(products);

function obtenerNombresDeProductos(array, categoriasSeleccionada) {
  const nombres = array
    .filter((producto) => categoriasSeleccionada.includes(producto.category))
    .map((producto) => producto.title);
  nombres.sort();

  const productosEnumerados = nombres.map(
    (nombre, index) => `${index + 1}. ${nombre}`
  );

  return productosEnumerados.join("\n");
}

const categoriasSeleccionada = ["electronics", "jewelery"];
const nombresProductos = obtenerNombresDeProductos(
  products,
  categoriasSeleccionada
);

const nombreProductoDeseado = prompt(
  `Productos disponibles en las categorías "electronics" y "jewelery":\n\n  ${nombresProductos} \n\nQue producto quiere comprar:`
);

function buscarProductoPorNombre(productName) {
  return products.find(
    (product) => product.title.toLowerCase() === productName.toLowerCase()
  );
}

function mostrarNombreYPrecio(product) {
  if (product) {
    const confirmacion = confirm(
      `Nombre: ${product.title}\nPrecio: ${product.price}\n\n¿Desea comprar este producto?`
    );

    if (confirmacion) {
      const fechaEntrega = new Date();
      fechaEntrega.setDate(fechaEntrega.getDate() + 7);
      const entregaString = `${fechaEntrega.getDate()}/${
        fechaEntrega.getMonth() + 1
      }/${fechaEntrega.getFullYear()}`;

      alert(
        `¡Gracias por su compra!\nSu producto será entregado el ${entregaString}.`
      );
    } else {
      alert("Compra cancelada.");
    }
  } else {
    alert("El producto no se encuentra en la lista.");
  }
}

const productoDeseado = buscarProductoPorNombre(nombreProductoDeseado);

mostrarNombreYPrecio(productoDeseado);
