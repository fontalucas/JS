const carrito = [];
const burgers = [
    {id:1, nombre: "Rey Arturo", stock: 15, precio: 900},
    {id:2, nombre: "Maxima", stock: 0, precio: 850, img: src="../imagenes/MAXIMA.jpg"},
    {id:3, nombre: "William", stock: 10, precio: 500},
    {id:4, nombre: "Magnus", stock: 1, precio: 500},
    {id:5, nombre: "Smoke Shack", stock: 15, precio: 1000},
];

let cards = ``;
burgers.forEach((burger) => {
    const idButton = `add-cart${burger.id}`
    document.getElementById("seccion-card").innerHTML += 
    `<div class="card maxima" style="width: 14rem;">
    <img src="${burger.img}" class="card-img-top">
    <div class="card-body">
        <h4 class="card-title">Maxima</h4>
        <p class="card-text">Pan kustom, burger, cheddar x2, panceta x2, huevo, cebolla crispy y alioli</p>
        <button class="btn btn-primary" style="display: flex; margin: auto; background-color: rgba(255, 166, 0, 0.416);" id="${idButton}">Agregar al carrito</button>
    </div>
</div>`;

})

burgers.forEach((burger) => {
    const idButton = `add-cart${burger.id}`
    document.getElementById(idButton).addEventListener("click", () => {  carrito.push(burger);
    })
});
