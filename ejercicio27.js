function calcularPromedioFinal(promedioParciales, examenFinal, trabajoFinal) {
  let promedioParcialesPonderado = promedioParciales * 0.55;
  let examenFinalPonderado = examenFinal * 0.30;
  let trabajoFinalPonderado = trabajoFinal * 0.15;
  let promedioFinal = promedioParcialesPonderado + examenFinalPonderado + trabajoFinalPonderado;
  return promedioFinal;
}

let promedioParciales = parseFloat(prompt("Ingresa el promedio final de los parciales:"));
let examenFinal = parseFloat(prompt("Ingresa la calificación del examen final:"));
let trabajoFinal = parseFloat(prompt("Ingresa la calificación del trabajo final:"));

let promedioFinal = calcularPromedioFinal(promedioParciales, examenFinal, trabajoFinal);

alert("El promedio final de la materia de algoritmos es: " + promedioFinal.toFixed(2));
