
//Array del carrito vacio.
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];    

//variable para sumar y acumular el total del carrito.
const total = carrito.reduce((acumulador, burger) => acumulador + burger.precio, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;


/* for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')){
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria')
        filtrarProductosPorCategoria(categoria)
    }
} */

/* function filtrarProductosPorCategoria(categoria) {
    document.getElementById("cards").innerHTML = "";
    const productosFiltrados = burgers.filter((burger) => burger.category === categoria);

    productosFiltrados.forEach((burger) => {
        const idButton = `add-cart${burger.id}` 
        document.getElementById("cards").innerHTML += `<div class="card">
            <div class="precio">
                <p>$${burger.precio}</p>
            </div>
            <img src="${burger.img}">
            <h4>${burger.nombre}</h4>
            <a class="boton" id="${idButton}" data-id="${burger.id}">Añadir Al Carrito</a>
        </div>`;
      document.getElementById('cards').innerHTML = acumulador;
    })
} */

//Productos
const productos = []
console.log(productos);

//validacion de stock.
const controlDeStock = (producto) => {
    if (producto.stock > 0) {
        console.log("Prodcuto agregado al carrito")
    }
    else {
        Swal.fire(
            'Ups...',
            'No tenemos stock del producto',
            'error'
        )        
        }
}
    
//Generador de cards para todos los productos.
fetch("productos.json")
    .then((response) => response.json())
    .then((productos) => {
        productos.forEach((producto) => {
        const idButton = `add-cart${producto.id}`
        document.getElementById("cards").innerHTML += 
        `<div class="card" style="width: 14rem;">
        <img src="${producto.img}" class="card-img-top">
        <div class="card-body">
        <h4 class="card-title">${producto.nombre}</h4>
        <p class="card-text">Pan kustom, burger, cheddar x2, panceta x2, huevo, cebolla crispy y alioli</p>
        <button class="btn btn-primary" style="display: flex; margin: auto; background-color: rgba(255, 166, 0, 0.416);" id="${idButton}">Agregar al carrito</button>
        </div>
        </div>`;       
    })

    //Boton agregar carrito.
    productos.forEach((producto) => {
        const idButton = `add-cart${producto.id}`
        document.getElementById(idButton).addEventListener("click", () => {  
            carrito.push(producto);
            Swal.fire(
            'Genial!',
            'Prodcuto agregado al carrito',
            'success',
        )
            localStorage.setItem("carrito", JSON.stringify(carrito));
            document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
            controlDeStock(producto)
        })
    })
})


//Funcion para agergar resumen del carrito.
function mostrarCarrito(){
    carrito.forEach((producto) => { 
    const eButton = `eliminar-cart${producto.id}`
    document.getElementById("card-carrito").innerHTML +=
    `<div style="margin: auto; display: flex;">
    <img src="${producto.img}"</img>
    <h6 class="card-title">${producto.nombre}</h6>
    <h6 class="card-title">$${producto.precio}</h6>
    <button class="eButton btn btn-danger btn-small fa fa-trash" style="display: flex; margin: auto; margin-botton: 5px;" onclick="return eliminar(${producto.id})" >Eliminar</button> 
</div>
<hr>`
    }) 
}

function eliminar(idDelProducto) {
    const eliminarProducto = carrito.findIndex((borrar) => borrar.id === idDelProducto)
    carrito.splice(eliminarProducto, 1)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: 'Estas seguro?',
        text: "Eliminaras el producto del carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, quitarlo!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Eliminaste el producto.',
            'success'
            )
            setTimeout('window.location.reload()',2000);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'Casi casi.. tu comida esta a salvo :)',
            'error'
          )
        }
      })
      return (false)
                }
    
/* buscador */

/* const navegacionproductos = ["Clasicas", "Golden", "Cheese", "Homenaje"] */

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

