let carritoEjemplo = [
    { nombre: "Machu Picchu", precio: 100 },
    { nombre: "Arequipa", precio: 80 }
];

carritoEjemplo.forEach(producto =>{
    console.log(`${producto.nombre} cuesta $${producto.precio}`);
});