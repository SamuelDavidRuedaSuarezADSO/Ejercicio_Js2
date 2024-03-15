function calcularSueldo(nombre, horasTrabajo, pagoHora) {
  return horasTrabajo * pagoHora;
}

let nombre = prompt("Ingresa el nombre del empleado:");
let horasTrabajo = parseFloat(prompt("Ingresa las horas trabajadas:"));
let pagoHora = parseFloat(prompt("Ingresa el pago por hora:"));

let sueldo = calcularSueldo(nombre, horasTrabajo, pagoHora);

alert("El sueldo de " + nombre + " es: $" + sueldo.toFixed(2));
