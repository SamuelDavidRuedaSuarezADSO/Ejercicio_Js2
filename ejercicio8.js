let puntuacion = parseFloat(prompt("Ingrese la puntuación del empleado:"));

let nivel;
let cantidadDinero;

if (puntuacion === 0.0) {
  nivel = "Inaceptable";
  cantidadDinero = 0;
} else if (puntuacion === 0.4) {
  nivel = "Aceptable";
  cantidadDinero = 2400 * puntuacion;
} else if (puntuacion === 0.6) {
  nivel = "Meritorio";
  cantidadDinero = 2400 * puntuacion;
} else if (puntuacion > 0.6) {
  nivel = "Sobresaliente";
  cantidadDinero = 2400 * puntuacion;
} else {
  console.log("Puntuación inválida. Debe ser 0.0, 0.4, 0.6 o mayor.");
}

if (nivel) {
  console.log("Nivel de rendimiento:", nivel);
  console.log("Cantidad de dinero recibida:", cantidadDinero);
}