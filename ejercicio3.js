try {
  let num1 = parseFloat(prompt("Ingrese el primer numero a dividir:"));
  let num2 = parseFloat(prompt("Ingresa el segundo valor a dividir"));

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Alguno de los valores ingrasados no es valido");
  }

  if (num2 === 0) {
    throw new Error("No se puede dividir entre 0");
  }

  let div = num1 / num2;
  alert(`El resultado de la diviion se : ${div}`);

} catch (error) {
  alert(`Error: ${error.message}`)
}