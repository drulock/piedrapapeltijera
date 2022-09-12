var jugador = 0;
var pc = 0;
var eleccionPc = 0;
var puntuacionJugador = 0;
var puntuacionPc = 0;
var seleccionChild = document.getElementById("seleccion");
var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijera = document.getElementById("tijera");

piedra.addEventListener("click", piedraSeleccion);
papel.addEventListener("click", papelSeleccion);
tijera.addEventListener("click", tijeraSeleccion);

var boton = document.getElementById("boton");
boton.addEventListener("click", numeroRandom);
boton.addEventListener("click", jugar);
boton.addEventListener("click", puntuar);

var jugandoChild = document.getElementById("jugando");

function numeroRandom() {
    var aleatorio = (Math.round(Math.random()*2)+1);
    pc = aleatorio;
    switch (aleatorio) {
        case 1:
            eleccionPc = ("Piedra");
            break;
        case 2:
            eleccionPc = ("Papel");
            break;
        case 3:
            eleccionPc = ("Tijera");
            break;

    }
    console.log(eleccionPc);
    console.log(jugador);
}
function puntuar(){
    document.getElementById('puntuacionJugadorChild').innerHTML = puntuacionJugador;
    document.getElementById('puntuacionPcChild').innerHTML = puntuacionPc;
}

function jugar () {
    document.getElementById('jugando').innerHTML = '';
    
    
    if (jugador == 0) {
        jugandoChild.innerHTML = ("Por favor seleccione su opción ");
    }
    else if (pc == jugador) {
        jugandoChild.innerHTML = ("El pc eligio " + eleccionPc + " Empataste");
    }
    else if (jugador == 1 && pc == 3) {
        jugandoChild.innerHTML = ("El pc eligio " + eleccionPc + " Ganaste");
        puntuacionJugador += 1;
    }
    else if (jugador == 2 && pc == 1) {
        jugandoChild.innerHTML = ("El pc eligio " + eleccionPc + " Ganaste");
        puntuacionJugador += 1;
    }
    else if (jugador == 3 && pc == 2) {
        jugandoChild.innerHTML = ("El pc eligio " + eleccionPc + " Ganaste");
        puntuacionJugador += 1;
    }
    else  {
        jugandoChild.innerHTML = ("El pc eligio " + eleccionPc + " Perdiste");
        puntuacionPc += 1;
    }
    
    
}

function piedraSeleccion(){
    jugador = 1;
    seleccionChild.innerHTML = ("Seleccionaste Piedra como opción");
    document.getElementById('jugando').innerHTML = '';
    document.getElementById('resultadoChild').innerHTML = '';
}

function papelSeleccion(){
    jugador = 2;
    seleccionChild.innerHTML = ("Seleccionaste Papel como opción");
    document.getElementById('jugando').innerHTML = '';
    document.getElementById('resultadoChild').innerHTML = '';
}

function tijeraSeleccion(){
    jugador = 3;
    seleccionChild.innerHTML = ("Seleccionaste Tijera como opción");
    document.getElementById('jugando').innerHTML = '';
    document.getElementById('resultadoChild').innerHTML = '';
}



