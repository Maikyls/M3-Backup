"use strict";
const nombre = "Jorge";
const oli = 3;
const usuarioMike = {
    name: "oli",
    age: 9,
    active: false,
    address: {
        street: "jalisco street",
        number: 5,
    },
};
const saludo = (name, time) => {
    return `oli ${name}, la hora es ${time}`;
};
console.log(saludo(nombre, oli));
function validarTalla(talla) {
    if (talla === "XL" || talla == "S") {
        return "Agotado";
    }
    return "Disponible";
}
console.log(validarTalla("L"));
console.log(validarTalla("S"));
