
function calcularCostoLlamada(minutos, costoPorMinuto, iva) {
  let costoSinIVA = minutos * costoPorMinuto;

  let montoIVA = costoSinIVA * (iva / 100);

  let costoTotal = costoSinIVA + montoIVA;

  return costoTotal;
}

const costoPorMinuto = 355;
const iva = 20;

let minutos = parseFloat(prompt("Ingresa la duración de la llamada en minutos:"));

let costoTotal = calcularCostoLlamada(minutos, costoPorMinuto, iva);

alert("El costo total de la llamada es: $" + costoTotal.toFixed(2));
