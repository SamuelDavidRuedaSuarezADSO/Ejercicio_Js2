let mom = parseInt(prompt("Ingresa el año de nacimiento de la madre:"));
let son = parseInt(prompt("Ingresa la edad del hijo:"));

let year = 2024;

let momAge = year - mom;
let momAgePregnant = momAge - son;

alert(`La madre tenia ${momAgePregnant} años`);