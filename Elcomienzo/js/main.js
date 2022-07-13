/* let numero = parseInt(prompt("Ingrese un numero"));

for (let i = 1; i <=10; i++){
    let multi = numero * i;
    console.log(numero + " x " + i + " = " + multi);   
}

let pedidos = 0;

while( pedidos <= 15){
    let cantidadDePedidos = parseInt(prompt("Ingrese su numero de pedido")); 
    pedidos++;}
    
    if(cantidadDePedidos < 15){
        console.log("Su pedido esta confirmado");}
    else{
        console.log("Se ha alcanzado el limite de pedidos");
    } */

/*
const edadPersona = 19;
const dineroEnElBolsillo = 2000;
if(edadPersona >= 18 && dineroEnElBolsillo >= 2000){
    console.log("Bienvenido")
    if(edadPersona != 18) {
        console.log("Felicitaciones, sos mayor de esdad pero no tenes 18")
    }
}
else {
    console.log("No puedes entrar, eres menor")

} */
//const  listado = /* ["valor1", "valor2", "valor3"] */ [5, 7, 3];

//listado[2] /* seria el 3 */
//listado[0] /* Seria el 5 */
//listado[1] /* seria el 7 */

/* let sumadorDeNotas = 0 ;

for(let posicion = 0; posicion < 3; posicion++) {
    sumadorDeNotas = sumadorDeNotas + listado[];    
    
}   
const promedio = sumadorDeNotas/3; 
console.log(promedio); */ /* es igual a 5 */

/* if(promedio > 6) {
    console.log("Aprobaste, te sacaste un " + promedio);}
    else {
        console.log("No aprobaste, tu nota fue un " + promedio);  
    } */


function agregarAlCarrito(producto, stock, precio) {
    const controlDeStock = tenemosStock(stock)
    const totalDeLaCompra = sumar(precio)
    if(controlDeStock == "Tenemos Stock") {
    console.log("Prodcuto agregado al carrito" + producto) }
    else {
        console.log("No tenemos stock de" + producto); 
    }
    if(totalDeLaCompra == "resultado");
    
}
    function tenemosStock(stock) {
        if(stock > 0) {
            return ("Tenemos Stock");
            
        }else {
            return ("No tenemos stock");
        }
        
    }
let resultado = 0;
    function sumar (primerNumero, segundoNumero, tercerNumero, cuartoNumero) {
        resultado = primerNumero + segundoNumero + tercerNumero + cuartoNumero;
    } 
agregarAlCarrito(" Rey Arturo", 15, 900);
agregarAlCarrito(" Rey Arturo", 14, 900);
agregarAlCarrito(" Maxima", 0, 800);
agregarAlCarrito(" William", 10, 500);
agregarAlCarrito(" Magnus", 1, 500);

sumar(900, 900, 500, 500);

console.log("Total de la compra " + "$" + resultado);



/* const producto = Burger;
function Burger(_nombre, _stock, _precio) { // Funcion constructora
    this.nombre = " Rey Arturo";
    this.stock = 0;
    this.precio = 800; }*/


/* const reyarturo = new Burger(" Rey Arturo", 50, 850);
const maxima= new Burger("Maxima", 15, 950); */
