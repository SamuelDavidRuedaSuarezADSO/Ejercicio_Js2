let prue = prompt("Ingresa la prueba");

if (/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/
  .test(prue)) {
  alert("Si reconoce")
}
else {
  alert("No reconoce")
}