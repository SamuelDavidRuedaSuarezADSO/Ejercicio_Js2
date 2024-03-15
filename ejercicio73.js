let frase = prompt("Ingrese una palabra").toLocaleLowerCase();
let letra = prompt("Ingrese una palabra").toLocaleLowerCase();
let con = 0;
for (let i = 1; i < frase.length; i++) {
  if (frase.charAt(i) == letra) {
    con++;
  }
  alert(`La letra ${letra} aparece ${con} de la palabra :"${frase}"`)

}