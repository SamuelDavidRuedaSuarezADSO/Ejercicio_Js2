function calcularRaices(a, b, c) {
  let discriminante = b * b - 4 * a * c;
  let raices = [];

  if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    raices.push(x1, x2);
  } else if (discriminante === 0) {
    let x = -b / (2 * a);
    raices.push(x);
  } else {
    alert("La ecuación tiene raíces complejas.");
  }

  return raices;
}

let a = parseFloat(prompt("Ingresa el coeficiente a:"));
let b = parseFloat(prompt("Ingresa el coeficiente b:"));
let c = parseFloat(prompt("Ingresa el coeficiente c:"));

let raices = calcularRaices(a, b, c);
if (raices.length === 0) {
  alert("La ecuación no tiene raíces reales.");
} else if (raices.length === 1) {
  alert("La única raíz real es: " + raices[0]);
} else {
  alert("Las raíces reales son: " + raices[0] + " y " + raices[1]);
}
