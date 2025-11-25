function Destino(nombre) {
    this.nombre = nombre;
}

Destino.prototype,mostrar = function () {
    return `Destino: ${this.nombre}`;
};

const d1 = new Destino("Arequipa");
console.log(d1.mostrar());