class Calculadora {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sumar(num1, num2) {
    console.log(num1 + num2);
  }
  resta(num1, num2) {
    console.log(num1 - num2);
  }
  multi(num1, num2) {
    console.log(num1 * num2);
  }
  div(num1, num2) {
    console.log(num1 / num2);
  }
}

let num1 = parseInt(prompt("Ingresa el primer numero deseas operar: "))
let num2 = parseInt(prompt("Ingresa el segundo numero deseas operar: "))

const numeros = new Calculadora();

numeros.sumar(num1, num2);
numeros.resta(num1, num2);
numeros.multi(num1, num2);
numeros.div(num1, num2);
