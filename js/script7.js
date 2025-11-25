let mapaPrecios = new Map();
mapaPrecios.set("Machu Picchu", 100);
mapaPrecios.set("Arequipa", 80);

console.log("Precio de Machu Picchu", mapaPrecios.get("Machu Picchu"));

class Lugar {
    mostrar() { return "Lugar genérico"; }
}
class MachuPicchu extends Lugar {
    mostrar() { return "Machu Picchu - Patrimonio Mundial"; }
}
class Arequipa extends Lugar {
    mostrar() { return "Arequipa - Ciudad Blanca"; }
}

let lugares = [new Lugar(), new MachuPicchu(), new Arequipa()];
lugares.forEach(l => console.log(l.mostrar()));