//Programa indicará si la primera letra de palabra ingresada es mayúscula o minúscula

let palabra = prompt('Ingrese nombre');

//Función extrae el primer carácter de la cadena ingresada
inicial = palabra.substring(0, 1);

//Se define mayúsculas 
const may = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Se define switch para buscar minúsculas
let buscarMinusculas = 0;

//Iteración recorrerá array y comparará cada elemento con el carácter extraido.
for (i = 0; i <= may.length; i++) {
    //Si coincide alguna mayúscula con contenido de array, mostrará mensaje de mayúscula encontrada
    if (inicial === may[i]) {
        console.log('La primera letra de la palabra es mayúscula');
        break;
    }
    //Si no encuentra mayúscula, se compara largo del array, si coincide, se activará switch para mostrar minúscula
    if (i === may.length) {
        buscarMinusculas = 1;
    }
}

//Si switch se activa, se muestra mensaje de que inicial está en minúscula.
if (buscarMinusculas === 1) {
    console.log('La primera letra es minúscula');
}

//Se acaba programa