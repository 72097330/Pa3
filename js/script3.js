function calcularDescuento(monto) {
    return monto > 150 ? monto * 0.9 : monto;
}

const calcularTotal = (precio, cantidad) => precio * cantidad;

function contarProductos(index = 0, lista = ["A", "B", "C"]) {
    if (index >= lista.length) return 0;
    return 1 + contarProductos(index + 1, lista);
}

console.log("Total con descuento:", calcularDescuento(total));
console.log("Cantidad de productos", contarProductos());