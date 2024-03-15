let nombre = prompt("Ingrese su nombre:");
let sexo = prompt("Ingrese su sexo (M para mujer, H para hombre):");

if (sexo.toUpperCase() === 'M' && nombre.toUpperCase() < 'M' ||
  sexo.toUpperCase() === 'H' && nombre.toUpperCase() >= 'N') {
  alert("Usted pertenece al grupo A.");
} else {
  alert("Usted pertenece al grupo B.");
}