function calcularPromedio(calificacion1, calificacion2, calificacion3, calificacion4) {
  return (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
}

let calificacion1 = parseFloat(prompt("Ingresa la calificación del primer examen (de 1 a 5 puntos):"));
let calificacion2 = parseFloat(prompt("Ingresa la calificación del segundo examen (de 1 a 5 puntos):"));
let calificacion3 = parseFloat(prompt("Ingresa la calificación del tercer examen (de 1 a 5 puntos):"));
let calificacion4 = parseFloat(prompt("Ingresa la calificación del cuarto examen (de 1 a 5 puntos):"));

let promedio = calcularPromedio(calificacion1, calificacion2, calificacion3, calificacion4);

alert("El promedio de las calificaciones es: " + promedio.toFixed(2));
