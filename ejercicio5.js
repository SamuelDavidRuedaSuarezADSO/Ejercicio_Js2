let edad = parseInt(prompt("Ingresa tu edad: "));

if (edad >= 16) {
  let ingre = parseInt(prompt("Ingresa tu ingreso mensual: "));
  if (ingre >= 1000) {
    alert("Debes Tributar");
  }
  else {
    alert("No debes tributar");
  }
}
else if (edad > 0 && edad < 16) {
  alert("Las dedes entre 1 y 15 no deben tributar")
}
else {
  alert("Error: edad no valida");
}