let radio = parseFloat(prompt("Ingresa el radio de la circunferencia:"));
let pi = 3.1416;

let log = 2 * pi * radio;
let area = pi * Math.pow(radio, 2);

alert(`la longitud de la circunferencia es: ${log} y su area es: ${area}`);