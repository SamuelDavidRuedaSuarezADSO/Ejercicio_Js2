let frase = prompt("Ingresa la frase:");
let resp = "";

console.log(frase.length());

for (let i = frase.length - 1; i >= 0; i--) {
  resp += frase[i];
}

alert(resp);
