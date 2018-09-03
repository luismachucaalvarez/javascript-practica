//Programa para ver factibilidad de crear un triángulo 
//en base a sus ángulos

let x = prompt('Ingrese primer ángulo:');
let y = prompt('Ingrese segundo ángulo:');
let z = prompt('Ingrese tercer ángulo:');
let anguloMayor, anguloSecundario1, anguloSecundario2, anguloExterno, sumaAngulosSecundarios;

//Calculará el ángulo más amplio y sus ángulos secundarios
if ((Number(x) > Number(y)) && (Number(x) > Number(z))) {
    anguloMayor = Number(x);
    anguloSecundario1 = Number(y);
    anguloSecundario2 = Number(z);
} else if ((Number(y) > Number(z))) {
    anguloMayor = Number(y);
    anguloSecundario1 = Number(x);
    anguloSecundario2 = Number(z);
} else {
    anguloMayor = Number(z);
    anguloSecundario1 = Number(x);
    anguloSecundario2 = Number(y);
}

//Se calcula el ángulo externo, el cual debe ser igual a la suma de los 
//ángulos internos no contiguos.
anguloExterno = 180 - anguloMayor;
sumaAngulosSecundarios = anguloSecundario1 + anguloSecundario2;

if (anguloExterno == sumaAngulosSecundarios) {
    console.log(`Los ángulos ingresados son válidos para un triángulo`);
} else {
    console.log(`Datos no validos para un triángulo`);
}