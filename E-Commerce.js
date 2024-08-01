class Productos {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}
const arrayContenedorProductos = [
    new Productos(1, "remera", 21),
    new Productos(2, "pantalon", 22),
    new Productos(3, "camisa", 31),
    new Productos(4, "zapatillas", 43),
];
let mostrarProductos = "";

arrayContenedorProductos.forEach((elemento) => {
    mostrarProductos += elemento.id + " - " + elemento.producto + " - Precio: $" + elemento.precio + "\n";
});

const carrito = [];
let precioFinal = 0;
let usuario = 0;

while (true) {
    usuario = parseInt(prompt("Para comprar ingrese el número de cada producto, ingrese 0 para salir\n" + mostrarProductos));
    if (usuario === 0) {
        precioFinal = carrito.reduce((total, producto) => total + producto.precio, 0);
        alert("Usted a elegido la opcion de salir del programa, el total de su compra es: $" + precioFinal);
        break;
    }
    else if (usuario >= 1 && usuario <= 4) {
        const encontrarProductos = arrayContenedorProductos.find(elemento => elemento.id === usuario);
        carrito.push(encontrarProductos);
        alert("producto añadido al carrito");

    } else if (usuario > 4) {
        alert("usted a ingresado un numero fuera de rango, porfavor ingrese nuevamente un numero del 1 al 4, 0 para salir.");
    } else {
        alert("Usted a ingresado un caracter no permitido, porfavor ingrese nuevamente un numero del 1 al 4, 0 para salir ");
    }

}



