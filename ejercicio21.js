function calcularVolumenElipsoide(a, b, c) {
  return (4 / 3) * Math.PI * a * b * c;
}

let a = parseFloat(prompt("Ingresa la longitud del semieje 'a':"));
let b = parseFloat(prompt("Ingresa la longitud del semieje 'b':"));
let c = parseFloat(prompt("Ingresa la longitud del semieje 'c':"));

let volumen = calcularVolumenElipsoide(a, b, c);

alert("El volumen del elipsoide es: " + volumen.toFixed(2));
