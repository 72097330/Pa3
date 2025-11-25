const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("boton");

if (contendor && boton) {
    contenedor.addEventListener("click", () => {
        console.log("Click en el contenedor (burbujeo)");
    }, false);

    boton.addEventListener("click", () => {
        console.log("Click en el boton");
    }, false);

    contenedor.addEventListener("click", () => {
        console.log("Click capturado en el contenedor (captura)");
    }, true);
}