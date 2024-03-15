function calcularAreaBase(radio) {
  return Math.PI * Math.pow(radio, 2);
}

function calcularVolumen(radio, altura) {
  return calcularAreaBase(radio) * altura;
}

let radio = parseFloat(prompt("Ingresa el radio del cilindro:"));
let altura = parseFloat(prompt("Ingresa la altura del cilindro:"));

let areaBase = calcularAreaBase(radio);
let volumen = calcularVolumen(radio, altura);

alert("El área de la base del cilindro es: " + areaBase.toFixed(2));
alert("El volumen del cilindro es: " + volumen.toFixed(2));
