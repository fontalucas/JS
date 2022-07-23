
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



const carrito = [];
const burgers =[
    {nombre: "Rey Arturo", stock: 15, precio: 900},
    {nombre: "Maxima", stock: 0, precio: 850},
    {nombre: "William", stock: 10, precio: 500},
    {nombre: "Magnus", stock: 1, precio: 500},
    {nombre: "Smoke Shack", stock: 15, precio: 1000},
];
const resultado1 = burgers.filter((el) => el.precio < 1000);
console.log(resultado1);

function agregarAlCarrito(nombre, stock, precio) {
    const controlDeStock = tenemosStock(stock)
    const totalDeLaCompra = sumar(precio)
    carrito.push(nombre);
    console.log(carrito);
    
    if(controlDeStock == "Tenemos Stock") {
        console.log("Prodcuto agregado al carrito" + nombre) }
        else {
            alert("No tenemos stock de " + nombre); 
        }
        if(totalDeLaCompra == resultado);
    }
    function tenemosStock(stock) {
        if(stock > 0) {
            return ("Tenemos Stock");
            
        }else {
            return ("No tenemos stock ");
        }
    }
    let resultado = 0;
    function sumar (primerNumero, segundoNumero, tercerNumero, cuartoNumero) {
        resultado = primerNumero + segundoNumero + tercerNumero + cuartoNumero;
    } 
agregarAlCarrito("Rey Arturo", 15, 900);
agregarAlCarrito("Rey Arturo", 14, 900);
agregarAlCarrito("Maxima", 0, 800);
agregarAlCarrito("William", 10, 500);
agregarAlCarrito("Magnus", 1, 500);

sumar(900, 900, 500, 500);

alert("Total de la compra " + "$" + resultado);

function aceptarPedido(muchasGracias) {
    let controlDePago = parseInt(prompt("Con cuanto va a abonar?"))
    if(controlDePago > resultado) {
        console.log("Pedido aceptado")
        alert("Muchas Gracias, pedido confirmado")
    }
    else(controlDePago < resultado) 
        alert("Pedido rechazado, falta dinero");
    }
function borrarElementoDelCarrito(nombreDelProducto){
    const index = carrito.findIndex(nombre => nombre == nombreDelProducto);
    console.log(index);
    carrito.splice(index, 1);
    console.log(carrito);   
}
aceptarPedido();
borrarElementoDelCarrito("Rey Arturo")


/* const burger = Burger;
function Burger(_nombre, _stock, _precio) { // Funcion constructora
    this.nombre = " ";
    this.stock = 0;
    this.precio = 500; }


const reyarturo = new Burger(" Rey Arturo", 50, 850);
const maxima = new Burger(" Maxima", 0, 950);
const william= new Burger(" William", 15, 500);
const magnus= new Burger(" Magnus", 15, 500);
const smokeshack= new Burger(" Smoke Shack", 15, 950); */