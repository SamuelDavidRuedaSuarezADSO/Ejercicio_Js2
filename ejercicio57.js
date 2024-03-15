const calificaciones = parseFloat(prompt("Ingrese el valor de calificacion"));
if (calificaciones >= 9.1 && calificaciones <= 10) {
  alert("Usted obtuvo una A Excelente")
}
else if (calificaciones >= 8.1 && calificaciones <= 9.1) {
  alert("Usted obtuvo una A Muy bien")
}
else if (calificaciones >= 7.5 && calificaciones <= 8) {
  alert("Usted Obtuvo A bien")
}
else if (calificaciones < 7.5) {
  alert("Usted no aprobo")
}
else {
  alert("Error vuelva a intentar")
}