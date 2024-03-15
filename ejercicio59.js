const edad = parseInt(prompt("Ingrese la edad"));
const estatura = parseInt(prompt("Ingrese la estatura"));
const peso = parseInt(prompt("Ingrese el peso"));
if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
  alert("Usted puede entrar a la seleccion");
}
else {
  alert("Usted no cumple los requisitos espere");
}