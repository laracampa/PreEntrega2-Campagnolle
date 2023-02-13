const productos = [
    {nombre: "Tiramisu", precio: 1000},
    {nombre: "Lemonpie", precio: 2000},
    {nombre: "Brownie", precio: 3000},
    {nombre: "Chocotorta", precio: 4000},
];

let carrito = []

let nombre = prompt ("Ingrese su nombre aquí:");
alert("Bienvenido/a " + nombre);

let seleccion = prompt ("¿Desea pedir algo? \nIngrese si o no:");
while(seleccion != "si" && seleccion != "no"){
    alert("Disculpe, ingresó la información incorrecta. La respuesta debe ser si o no.")
    seleccion = prompt ("¿Desea pedir algo? \nIngrese si o no:");
}

if(seleccion == "si"){
    alert("A continuación podrá ver nuestro menú:")
    let menu = productos.map(
        (producto) => producto.nombre + " $" + producto.precio);
    alert(menu.join ("\n"))
} else if (seleccion == "no") {
    alert("Esperamos que desee probarnos pronto. ¡Hasta luego!")
}

while(seleccion != "no"){
    let producto = prompt("Escriba lo que quiere encargar\n(Por favor, escriba solo un elemento a la vez y todo en minúscula):\ntiramisu\nlemonpie\nbrownie\nchocotorta")
    let precio = 0

    if (producto == "tiramisu" || producto == "lemonpie" || producto == "brownie" || producto == "chocotorta"){
        switch(producto){
            case "tiramisu":
                precio = 1000;
                break;
            case "lemonpie":
                precio = 2000;
                break;
            case "brownie":
                precio = 3000;
                break;
            case "chocotorta":
                precio = 4000;
                break;
            default:
                alert("Disculpe, ingresó la información incorrecta.")
            }
        let unidades = parseInt(prompt("¿Cuántas unidades quiere llevar?"))
        carrito.push ({producto, precio, unidades})
        console.log(carrito)
} else {
    alert("Disculpe, ingresó la información equivocada. Vuelva a intentarlo.")
}

seleccion = prompt ("¿Deseas pedir algo más? \nIngrese si o no:");
while (seleccion == "no"){
    carrito.forEach((carritoFinal) => {
        console.log(`Ha encargado ${carritoFinal.unidades} unidades de ${carritoFinal.producto}, lo que da un subtotal de: $${carritoFinal.unidades * carritoFinal.precio}.`)
        alert (`Ha encargado ${carritoFinal.unidades} unidades de ${carritoFinal.producto}, lo que da un subtotal de: $${carritoFinal.unidades * carritoFinal.precio}.`)
        })
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    console.log(`El total a pagar es: ${total}.\n¡Muchas gracias por su compra!`)
    alert (`El total a pagar es: ${total}.\n¡Muchas gracias por su compra!`)
    break;
    }
}