let primerStikers = document.getElementById("primerStikers");
let segundoStikers = document.getElementById("segundoStikers");
let tercerStikers = document.getElementById("tercerStikers");
let textoCantidadStikers = document.getElementById("textoCantidadStikers");
let btnVerificar = document.getElementById("btnVerificar");

function verificarTotal() {
  let primerValor = Number(primerStikers.value);
  let segundoValor = Number(segundoStikers.value);
  let tercerValor = Number(tercerStikers.value);
  let totalStikers = primerValor + segundoValor + tercerValor;
  //

  if (totalStikers > 10) {
    textoCantidadStikers.textContent = "Llevas demasiados stickers";
  } else {
    textoCantidadStikers.textContent = `Llevas ${totalStikers} stickers`;
  }
}
