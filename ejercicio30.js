function comprobarFortaleza(contrasena) {
  if (contrasena.length < 8 || contrasena.length > 12) {
    return false;
  }

  let tieneMayuscula = /[A-Z]/.test(contrasena);
  let tieneMinuscula = /[a-z]/.test(contrasena);
  let tieneDigito = /[0-9]/.test(contrasena);

  return tieneMayuscula && tieneMinuscula && tieneDigito;
}

let contrasena = prompt("Ingresa la contraseña a comprobar:");

if (comprobarFortaleza(contrasena)) {
  alert("La contraseña es fuerte.");
}
else {
  alert("La contraseña es débil. Debe tener entre 8 y 12 caracteres, al menos una mayúscula, una minúscula, y un dígito.");
}
