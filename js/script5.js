class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        return `${this.nombre} cuesta $${this.precio}`;
    }
}

const p1 = new Producto("Selva peruana", 120);
console.log(p1.mostrarInfo());