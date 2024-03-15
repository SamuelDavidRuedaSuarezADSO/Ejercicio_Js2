let temperatura = parseFloat(prompt("Ingrese el valor de temperatura"));
let presion = parseFloat(prompt("Ingrese el valor de presion"));
if (presion > 200 && temperatura > 100) {
  window.alert("Alarma")
}
else {
  window.alert("Normal")
}