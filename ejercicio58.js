const mes = prompt("Ingrese el mes").toLocaleLowerCase();
if (mes === "enero") {
  alert("Capricornio: hasta el 20 de enero, y Acuario (desde el 20 de enero)");
} else if (mes === "febrero") {
  alert("Acuario:hasta el 18 de febrero, y Piscis (desde el 19 de febrero)");
} else if (mes === "marzo") {
  alert("Piscis:hasta el 20 de marzo, y Aries (desde el 21 de marzo)");
} else if (mes === "abril") {
  alert("Aries:hasta el 19 de abril, y Tauro (desde el 20 de abril)");
} else if (mes === "mayo") {
  alert("Tauro:hasta el 20 de mayo, y Géminis (desde el 21 de mayo)");
} else if (mes === "junio") {
  alert("Géminis:hasta el 20 de junio, y Cáncer (desde el 21 de junio)");
} else if (mes === "julio") {
  alert("Cáncer:hasta el 22 de julio, y Leo (desde el 23 de julio)");
} else if (mes === "agosto") {
  alert("Leo:hasta el 22 de agosto, y Virgo (desde el 23 de agosto)");
} else if (mes === "septiembre") {
  alert("Virgo:hasta el 22 de septiembre, y Libra (desde el 23 de septiembre)");
} else if (mes === "octubre") {
  alert("Libra:hasta el 22 de octubre, y Escorpio (desde el 23 de octubre)");
} else if (mes === "noviembre") {
  alert("Escorpio:hasta el 21 de noviembre, y Sagitario (desde el 22 de noviembre)");
} else if (mes === "diciembre") {
  alert("Sagitario:hasta el 21 de diciembre, y Capricornio (desde el 22 de diciembre)");
} else {
  alert("Mes no reconocido. Por favor, ingrese un mes válido.");
}