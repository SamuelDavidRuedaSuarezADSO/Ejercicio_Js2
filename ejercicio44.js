let pesos = parseInt(prompt("Ingresa la cantidad de pesos a combertir:"));

const dolar = 0.00026;
const euro = 0.00023;

let respD = pesos * dolar;
let respE = pesos * euro;

alert(`En dolares son ${respD} y en euros son ${respE}`);