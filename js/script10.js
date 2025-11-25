let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    alert(`${nombre} agregado al carrito`);
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoDiv = document.getElementById("carrito");
    if (carritoDiv) {
        carritoDiv.innerHTML = `
      <h2>Carrito</h2>
      <ul>${carrito.map(p => `<li>${p.nombre} - $${p.precio}</li>`).join("")}</ul>
      <p>Total: $${carrito.reduce((acc, p) => acc + p.precio, 0)}</p>
    `;
    }
}