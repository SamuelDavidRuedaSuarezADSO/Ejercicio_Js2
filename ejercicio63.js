const edad = prompt("Ingrese su edad ;");
const año_actual = new Date().getFullYear();
const año_naci = año_actual - edad;
for (let i = 0; i < edad; i++) {
  const año_cumpli = año_naci + i;
  alert(`Los año ${año_cumpli} Usted ah cumplido ${i + 1} años`)
}