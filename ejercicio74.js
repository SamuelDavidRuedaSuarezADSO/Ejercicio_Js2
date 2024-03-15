while (true) {
  const eco = prompt("Introducce cualquier cosa (Saliar para terminar el programa)");
  if (eco.toLocaleLowerCase() == "salir") {
    break;
  }
  alert(`${eco}`)
}