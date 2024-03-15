let num1 = parseInt(prompt("Ingrese el primer digito"));
let num2 = parseInt(prompt("Ingrese el segundo digito "));
if (num1 > num2) {
  let e = num1 - num2;
  alert(`El total es ${e}`)
}
else {
  alert("El numero 1 no es mayor a numero2")
}