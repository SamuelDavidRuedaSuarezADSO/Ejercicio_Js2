function convertirVelocidad(kmh) {
  return kmh / 3.6;
}

let velocidadKmh = parseFloat(prompt("Ingresa la velocidad del automóvil en kilómetros por hora:"));

let velocidadMps = convertirVelocidad(velocidadKmh);

alert("La velocidad del automóvil es: " + velocidadMps.toFixed(2) + " metros por segundo");
