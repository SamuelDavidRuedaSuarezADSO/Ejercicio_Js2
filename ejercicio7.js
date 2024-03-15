let rent = parseInt(prompt("Ingresa su renta anual:"));

if (rent >= 10000 && rent < 20000) {
  alert(`Estas en el impositivo A`);
}
else if (rent >= 20000 && rent < 35000) {
  alert(`Estas en el impositivo B`);
}
else if (rent >= 35000 && rent < 60000) {
  alert(`Estas en el impositivo C`);
}
else if (rent >= 60000) {
  alert(`Estas en el impositivo D`);
}
else if (rent > 0 && rent < 10000) {
  alert(`No estas en ninguno impositivo`);
}
else {
  alert(`ERROR: Valor no valido`);
}
