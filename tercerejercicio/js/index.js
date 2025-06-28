let opcionUno = document.getElementById("opcionUno");
let opcionDos = document.getElementById("opcionDos");
let opcionTres = document.getElementById("opcionTres");
let parrafo = document.getElementById("parrafo");

function btnVerificar() {
  valorUno = Number(opcionUno.value);
  valorDos = Number(opcionDos.value);
  valorTres = Number(opcionTres.value);

  if (valorUno === 9 && valorDos === 1 && valorTres === 1) {
    parrafo.textContent = "password 1 correcto";
  } else if (valorUno === 7 && valorDos === 1 && valorTres === 4) {
    parrafo.textContent = "password 2 correcto";
  }
}
