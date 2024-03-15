function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

let fahrenheit = celsiusToFahrenheit(celsius);

alert("La temperatura en grados Fahrenheit es: " + fahrenheit.toFixed(2));
