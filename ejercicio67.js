let num1 = parseInt(prompt("Ingrese un numero entero"));
if (isNaN(num1) && num1 <= 0) {
  alert("Ahora ingrese un numero positivo")
}
else {
  alert("Se va a imprimir el triangulo rectangulo");
  for (let i = 1; i <= num1; i++) {
    li_ne = '';
  }
  for (let o = 0; o <= num1; o++) {
    li_ne += '*';
  }
  alert(`${li_ne}`)
}