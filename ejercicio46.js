const numero1 = prompt("Ingrese el primer digito");
const numero2 = prompt("Ingrese el segundo digito");
const numero3 = prompt("Ingrese el tecercer digito");
if (numero1 > numero2 && numero1 > numero3) {
  alert(`De los 3 digitos el mayor es: ${numero1}`)
}
else if (numero2 > numero1 && numero2 > numero3) {
  alert(`De los 3 digitos el mayor es ${numero2}`)
}
else {
  alert(`De los 3 digitos el mayor es ${numero3}`)
}