let cant = parseInt(prompt("Ingresa la cantidad de caja que lleva el camión:"))
let peso = parseFloat(prompt("Ingresa el peso de cada caja:"));

let resp = cant * peso;

alert(`El camión transporta ${resp} Kg`);