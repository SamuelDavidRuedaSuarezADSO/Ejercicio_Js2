let time = parseInt(prompt("Ingresa el tiempo que toma llenarse en minutos:"));
let radio = parseInt(prompt("Ingresa el radio del deposito:"));
let alto = parseInt(prompt("Ingresa la altura del deposito"));

let tiempo = time * 60;
let pi = 3.1416;

let volumen = pi * Math.pow(radio, 2) * alto;
let resp = volumen / tiempo;

alert(`Al deposito se llena ${resp} litros por cada segundo`);