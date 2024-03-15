function calcularDescuento(valorProducto, porcentajeDescuento) {
  return valorProducto * (1 - porcentajeDescuento / 100);
}

let precioProductos = [100, 150, 200, 250, 300];

let descuentoPrimero = 5;
let precioConDescuentoPrimero = calcularDescuento(precioProductos[0], descuentoPrimero);
let precioConDescuentoSegundo = calcularDescuento(precioProductos[1], descuentoPrimero);

let descuentoUltimo = 2;
let precioConDescuentoTercero = calcularDescuento(precioProductos[2], descuentoUltimo);
let precioConDescuentoCuarto = calcularDescuento(precioProductos[3], descuentoUltimo);

let totalCompra = precioConDescuentoPrimero + precioConDescuentoSegundo + precioConDescuentoTercero + precioConDescuentoCuarto + precioProductos[4];

alert("Valor a pagar por el primer producto: $" + precioConDescuentoPrimero.toFixed(2));
alert("Valor a pagar por el segundo producto: $" + precioConDescuentoSegundo.toFixed(2));
alert("Valor a pagar por el tercer producto: $" + precioConDescuentoTercero.toFixed(2));
alert("Valor a pagar por el cuarto producto: $" + precioConDescuentoCuarto.toFixed(2));
alert("Valor a pagar por el quinto producto: $" + precioProductos[4].toFixed(2));

alert("El total de la compra es: $" + totalCompra.toFixed(2));
