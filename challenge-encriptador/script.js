const cajaTexto1 = document.querySelector(".cajaTexto1");
const cajaTexto2 = document.querySelector(".cajaTexto2");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textEncriptado = encriptar(cajaTexto1.value);
    cajaTexto2.value = textEncriptado;
    cajaTexto1.value = "";
    cajaTexto2.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
          stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringEncriptada;
}

function btnDesencriptar() {
    const textDesencriptado = desencriptar(cajaTexto1.value);
    cajaTexto2.value = textDesencriptado;
    cajaTexto1.value = "";
}
  
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
    }
  
    return stringDesencriptada;
}


function copyText() {
  var cajaTexto2 = document.getElementById("cajaTexto2");
  var copiedText = cajaTexto2.value;
  return copiedText;
}

function pasteText(text) {
  var cajaTexto1 = document.getElementById("cajaTexto1");
  cajaTexto1.value = text;
}

document.getElementById("copyButton").addEventListener("click", function() {
  var copiedText = copyText();
  pasteText(copiedText);
});

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "c") {
    event.preventDefault();
    var copiedText = copyText();
    pasteText(copiedText);
  }
});


  

