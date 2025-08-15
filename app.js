let numeroSecreto = 0;
let intentos = 1;
let listaSorteados = [];
let numeroMaximo = 10;


function verificarUsuario() {
  let numeroDeUsuario = parseInt(document.getElementById("valorusuario").value);

  console.log(intentos);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Has acertado el número secreto en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}! 🎉`);
    document.getElementById("reiniciar").disabled = false;
  }else{
    if(numeroDeUsuario > numeroSecreto){
      //
      asignarTextoElemento("p", "El número secreto es menor. ❄️");
    }else{
      asignarTextoElemento("p", "El número secreto es mayor. 🔥");
    }
    intentos++;
    vaciarCaja();
  }
}

function vaciarCaja(){
  document.getElementById("valorusuario").value = "";
}
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML =texto ;
}
function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaSorteados);
  if (listaSorteados.length === numeroMaximo) {
    asignarTextoElemento('p', 'Todos los números han sido sorteados. Reinicia el juego para empezar de nuevo.');
    document.getElementById("intentar").disabled = true;
  }else { 
      if (listaSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
      }else {
        listaSorteados.push(numeroGenerado);
        return numeroGenerado;
  }


  }
  
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del número secreto');
  asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}.`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  vaciarCaja();

  intentos = 1;
  condicionesIniciales();

  document.getElementById("reiniciar").disabled = true;
  
  
}

condicionesIniciales();
