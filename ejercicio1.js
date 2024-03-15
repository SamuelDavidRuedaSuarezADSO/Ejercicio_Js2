let edad = prompt("Ingrese la edad:");
edad = parseInt(edad);

if (edad >= 18) {
  alert("Usted es mayor de edad");
}
else if (edad > 0 && edad < 18) {
  alert("Usted es menor de edad");
}
else if (edad < 0) {
  alert("Solo puedes ingresar numeros positivos");
}
else {
  alert("Solo puedes ingresar numeros");
}