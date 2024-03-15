const cursos = parseInt(prompt("Ingresar la cantidad de curso"));
if (cursos <= 6) {
  let costo1 = 2000000;
  let total = cursos * costo1;
  alert(`Usted tiene que pagar ${costo1} el total que tiene que pagar es ${total}`)
}
else if (cursos > 6) {
  let cost2 = 1200000;
  let total = cursos * cost2;
  alert(`Usted tiene que pagar ${cost2} el total que tiene que pagar es ${total}`)
}
else {
  alert("Error intentelo de nuevo")
}