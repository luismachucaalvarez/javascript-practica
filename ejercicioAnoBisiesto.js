//Programa para calcular si un año es bisiesto o no.

let anio = prompt('Ingrese año a calcular bisiesto');

//Se sacará año bisiesto en base a que un año sea divisible por 4, 100 y 400.
if ((Number(anio) % 4) === 0) {
    if ((Number(anio) % 100 === 0)) {
        mensajeNoBisiesto();
    } else {
        if ((Number(anio) % 400 === 0)) {
            mensajeBisiesto();
        } else {
            mensajeBisiesto();
        }
    }
} else {
    mensajeNoBisiesto();
}

//Funciones se ejecutarán al gatillar ciertas acciones.
//Solo mostrarán mensajes.
function mensajeBisiesto() {
    return console.log('Año bisiesto');
}

function mensajeNoBisiesto() {
    return console.log('Año no bisiesto');
}