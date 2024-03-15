let lad1 = parseInt(prompt("Ingrese el valor de num1"))
let lad2 = parseInt(prompt("Ingrese el valor de num2"))
let area_tr;
if (lad1 > 0 && lad2 > 0) {
  area_tr = lad1 * lad2
  alert(`El area del rectangulo es de ${area_tr}`)
}
else {
  alert("Los valores no son positivos")
}