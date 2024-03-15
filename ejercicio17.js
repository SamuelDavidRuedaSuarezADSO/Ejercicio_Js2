let radio = parseFloat(prompt("Ingresa el radio de la esfera: "));

let volumn = (4.0 / 3.0) * 3.1416 * Math.pow(radio, 3);

alert(`El volumen de la esfera es: ${volumn.toFixed(1)}`);