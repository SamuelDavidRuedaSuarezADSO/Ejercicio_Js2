let edad = parseInt(prompt("Introduce tu edad: "));

if (edad > 0 && edad < 4) {
  alert("Tienes entrada gratis");
}
else if (edad >= 4 && edad <= 18) {
  alert("Tienes que pagar 5£");
}
else if (edad > 18) {
  alert("Tienes que pagar 10£");
}
else {
  alert("ERROR: valor no valido");
}