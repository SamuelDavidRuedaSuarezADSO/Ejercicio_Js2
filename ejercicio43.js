let frase = prompt("Ingresa la prueba:");

if (/"(?:\\.|[^"\\])*"/
  .test(frase)) {
  alert("Si paso la prueba");
}
else {
  alert("No paso la prueba");
}