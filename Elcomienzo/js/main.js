



const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, burger) => acumulador + burger.precio, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;


function mostrarCarrito(){
    carrito.forEach((burger) =>
    {document.getElementById("cardsModal").innerHTML +=
    `<div>
    <p style="color:black; display: flex; flex-direction: row; margin: auto; justifyContent: center; ${burger.nombre}
    <img src="${burger.img}" style="width:80px">
    $${burger.precio}</p>
    <button>Eliminar</button>
   </div>`}) }

const burgers = [
    {id:1, nombre: "Rey Arturo", stock: 15, precio: 900},
    {id:2, nombre: "Maxima", stock: 0, precio: 850, img: src="../imagenes/MAXIMA.jpg"},
    {id:3, nombre: "William", stock: 10, precio: 500},
    {id:4, nombre: "Magnus", stock: 1, precio: 500},
    {id:5, nombre: "Smoke Shack", stock: 15, precio: 1000, img: src="../imagenes/smokeshacj.jpg"},
];


burgers.forEach((burger) => {
    const idButton = `add-cart${burger.id}`
    document.getElementById("seccion-card").innerHTML += 
    `<div class="card maxima" style="width: 14rem;">
    <img src="${burger.img}" class="card-img-top">
    <div class="card-body">
        <h4 class="card-title">${burger.nombre}</h4>
        <p class="card-text">Pan kustom, burger, cheddar x2, panceta x2, huevo, cebolla crispy y alioli</p>
        <button class="btn btn-primary" style="display: flex; margin: auto; background-color: rgba(255, 166, 0, 0.416);" id="${idButton}">Agregar al carrito</button>
    </div>
</div>`;



})

burgers.forEach((burger) => {
    const idButton = `add-cart${burger.id}`
    document.getElementById(idButton).addEventListener("click", () => {  
        carrito.push(burger);
        Swal.fire(
            'Genial!',
            'Prodcuto agregado al carrito',
            'success',
        )
        localStorage.setItem("carrito", JSON.stringify(carrito));
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
        console.log(carrito);
    })
});


/* buscador */

/* const navegacionBurgers = ["Clasicas", "Golden", "Cheese", "Homenaje"] */

/* for(let desde = 0; desde < navegacionBurgers.length; desde++) {
    document.getElementById("navegacion-burgers").innerHTML += /* aca se pone el buscador que esta en el HTML ${navegacionBurgers[desde]} */    
/* } */

/* navegacionBurgers.forEach((categoria) => {
    document.getElementById("navegacion-burgers").innerHTML += /* aca se pone el buscador ${categoria} */    

/* }) */

/* const resultado1 = burgers.filter((el) => el.precio < 1000);
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
-
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
borrarElementoDelCarrito("Rey Arturo") */


