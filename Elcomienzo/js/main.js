let numero = parseInt(prompt("Ingrese un numero"));

for (let i = 1; i <=10; i++){
    let multi = numero * i;
    console.log(numero + " x " + i + " = " + multi);   
}

let pedidos = 0;
while(cantidadDePedidos <= 15){
    let cantidadDePedidos = parseInt(prompt("Ingrese su numero de pedido")); 
    pedidos++;}
    
    if(cantidadDePedidos < 15){
        console.log("Su pedido esta confirmado");}
    else{
        console.log("Se ha alcanzado el limite de pedidos");
    }

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
 */
/* 
const producto = Burger;
function Burger(nombreParametro, stockParametro, precio) { // Funcion constructora
    this.nombreParametro = "";
    this.stockParametro = 10;
    this.precio = 800;

} */

/* const reyarturo = new Burger("Rey Arturo", 50, 850);
const maxima= new Burger("Maxima", 15, 950);
const burger3 = new Burger();
const burger4 = new Burger();
const burger5 = new Burger(); */