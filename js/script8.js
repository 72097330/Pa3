window.addEventListener("load", () => console.log("Página cargada"));
document.addEventListener("keydown", e => console.log("Tecla precionada:", e.key));
window.addEventListener("scroll", () => console.log("Desplazamiento detectado"));
document.addEventListener("focusin", e => console.log("Elemento enfocado:", e.target.tagName));

setInterval(() => {
    console.log("Temporizador activo");
}, 10000);