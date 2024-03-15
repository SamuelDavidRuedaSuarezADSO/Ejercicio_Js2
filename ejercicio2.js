let contraseña = "patos";
let confirm = prompt("Confirme la contraseña");

if (/^[a-zA-Z0-9]+$/.test(confirm)) {
  if (contraseña.toLowerCase == confirm.toLowerCase) {
    alert("Las contraseñas coinciden");
  }
  else {
    alert("Las contraseñas no coinciden");
  }
}
else {
  alert("La contraseña no es alfanumerica")
}