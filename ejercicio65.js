let num1 = parseInt(prompt("Ingrese un numero"));
if (num1 > 0) {
  let atras = "";
  for (let i = num1; i >= 0; i--) {
    atras += i + ",";
    alert(`La secuencia hacia atras ${atras}`)
  }
}
else {
  alert("Ingrese un numero entero Positivo Intentalo de nuevo")
}