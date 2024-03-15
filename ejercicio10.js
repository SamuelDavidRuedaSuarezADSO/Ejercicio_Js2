//Ejercicio 10
let opc = prompt("De que tipo desea su pizza: (C)carnes (V)vegetariana");
opc = opc.toLowerCase();
let ingredientes = ["mozzarella", "tomate"];
let elecc;

if (opc === "c") {
  let ingre = prompt("Que ingredientes desea: (P) peperoni (J) jamón (S) salmon");
  ingre = ingre.toLowerCase();
  elecc = "no es vegetariana";
  switch (ingre) {
    case "p":
      ingredientes.push("peperoni");
      break;
    case "j":
      ingredientes.push("jamon");
      break;
    case "s":
      ingredientes.push("salmon");
      break;
    default:
      alert("ERROR: valor no valido");
      break;
  }
}
else if (opc === "v") {
  let ingreV = prompt("Que ingredientes desea: (P) pimiento (T) tofu")
  ingreV = ingreV.toLowerCase();
  elecc = "es vegetariana";
  switch (ingreV) {
    case "p":
      ingredientes.push("pimiento");
      break;
    case "t":
      ingredientes.push("tofu");
      break;
    default:
      alert("ERROR: valor no valido");
      break;
  }
}
else {
  alert("ERROR: valor no valido");
}

alert(`La pizza seleccionada ${elecc} y sus ingredientes son ${ingredientes}`);