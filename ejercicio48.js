const desea = prompt("Que desea calcular triangulo o circulo").toLocaleLowerCase();
let triangulo, area;
if (desea == "t") {
  let base = parseFloat(prompt("Ingrese el valor de Base"));
  let altura = parseFloat(prompt("Ingrese el valor de altura"));
  triangulo = base * altura / 2;
  alert(`El area del triangulo es de : ${triangulo}`)
}
else if (desea == "c") {
  let radio = parseFloat(prompt("Ingrese el valor de area"));
  area = Math.PI * radio * radio;
  alert(`El area del circulo es de ${area}`)
}