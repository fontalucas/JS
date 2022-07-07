/* let libro; 
libro = "Mi libro";
let hoja = "hoja en blanco";


console.log(libro);

const dia = "jueves";
console.log(dia);

let mensaje1 = "hola";
let mensaje2 = "como estas";
console.log(mensaje1 + mensaje2); */

/* let nombre = prompt("Escribi tu nombre");
console.log(nombre);

let apellido = prompt("Decime tu apellido")
alert(apellido)


const numero1 = parseInt(prompt("ingresa un numero"))
let numero2 = prompt("ingrese un numero de 2 cifras") //esto devuelve un string //
numero2 = parseInt(numero2)

console.log(numero1 + numero2) */


/* let nombreUsuario = prompt("ingrese su nombre de usuario")
let contraseña = prompt("ingrese su contraseña")
let salida = "Bienvenido" + " " + nombreUsuario
console.log(salida)
alert(salida) */

const edadPersona = 19;
const dineroEnElBolsillo = 2000;
if(edadPersona >= 18 && dineroEnElBolsillo >= 2000){
    console.log("Bienvenido")
    if(edadPersona != 18) {
        console.log("Felicitaciones, sos mayor de esdad pero no tenes 18")
    }
}
else {
    console.log("No puedes entrar, eres menos")

}
const listado = /* ["valor1", "valor2", "valor3"] */ [5, 7, 3];

listado[2] /* seria el 3 */
listado[0] /* Seria el 5 */
listado[posicion]   /* seria el 7 */

let sumadorDeNotas = 0 ;

for(let posicion = 0; posicion < 3; posicion++) {
    sumadorDeNotas = sumadorDeNotas + listado[posicion];    
    
}   
const promedio = sumadorDeNotas/3; 
console.log(promedio); /* es igual a 5 */

if(promedio > 6) {
    console.log("Aprobaste, te sacaste un " + promedio);}
    else {
        console.log("No aprobaste, tu nota fue un " + promedio);  
    }



function agregarAlCarrito(producto, stock) {
    console.log("Prodcuto agregado al carrito" + producto);
}

function tenemosStock(stock) {
    if(sotck > 0) {
        return "Tenemos Stock";
    }else {
        return "Mo tenemos stock";
    }

}

agregarAlCarrito("Rey Arturo");
agregarAlCarrito("Maxima");
agregarAlCarrito("William");
agregarAlCarrito("Magnus");
