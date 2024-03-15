function calcularDescuentoYPrecioFinal(costo) {
  let descuento = costo * 0.1;
  let precioFinal = costo - descuento;
  return [descuento, precioFinal];
}

let costoMedicamentos = parseFloat(prompt("Ingresa el costo de los medicamentos:"));

let resultados = calcularDescuentoYPrecioFinal(costoMedicamentos);
let descuento = resultados[0];
let precioFinal = resultados[1];

alert("El descuento aplicado es: $" + descuento.toFixed(2) + "\nEl precio final es: $" + precioFinal.toFixed(2));
