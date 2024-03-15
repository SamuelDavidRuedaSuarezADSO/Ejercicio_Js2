let libro = parseInt(prompt("Ingresa de libros vendidos:"));
let cuader = parseInt(prompt("Ingresa de cuadernos vendidos:"));
let lapiz = parseInt(prompt("Ingresa de lapiz vendidos:"));

let respLibro = 10000 * libro;
let respCuad = 7550 * cuader;
let respLapiz = 5550 * lapiz;

let ventaTotal = respCuad + respLapiz + respLibro;

alert(`la venta total del dia es: ${ventaTotal}`);