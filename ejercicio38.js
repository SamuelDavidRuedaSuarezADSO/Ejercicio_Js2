function calculo(tot) {
  let martin = (2.0 / 3.0) * tot;
  let jairo = (1.0 / 4.0) * tot;

  let lorena = tot - martin - jairo;
  return lorena;
}

let tot = parseInt(prompt("Ingresa la cantidad total de las tapas:"));

let resp = calculo(tot);

alert(`Lorena dio ${resp.toFixed(0)} tapas`);