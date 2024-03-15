const num1 = parseInt(prompt("Ingrese el primer digito1"));
const num2 = parseInt(prompt("Ingrese el primer digito2"));
const num3 = parseInt(prompt("Ingrese el primer digito3"));
let mayor;
if (num1 > num2 && num1 > num3) {
  mayor = num1;
}
if (num2 > num1 && num2 > num3) {
  mayor = num2;
}
if (num3 > num1 && num3 > num2) {
  mayor = num3;
}
else if (num1 == num2 && num1 == num3) {
  alert(`Los tres digitos son iguales`)
}
let menor;
if (num1 < num2 && num1 < num3) {
  menor = num1;
}
else if (num2 < num1 && num2 > num3) {
  menor = num2;
}
else if (num3 < num1 && num3 > num2) {
  menor = num3;
}
window.alert(`El numero mayor es ${mayor} y el numero menor es ${menor}`)