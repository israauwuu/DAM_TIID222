const readline = require("readline"); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout 
});
let productos = [];


function agregarProducto() {
    rl.question("Ingrese el nombre del producto: ", function(nombre) {
        rl.question("Ingrese el precio del producto: ",function(precio){
            
            let producto = {
                nombre: nombre,
                precio: precio
            }

            productos.push(producto);
            console.log("Producto agregado correctamente.");
            menu();

        });
    });
}
       
function mostrarProductos() {
    console.log("\n===== PRODUCTOS =====")
    if (productos.length === 0) {
        console.log("No hay productos registrados.");
    } else{
        for(let i = 0; i < productos.length; i++) {
            console.log(
                (i+1)+
                ". Nombre: " + productos[i].nombre + 
                " | Precio: $" + productos[i].precio 
            );
        }
    }
    console.log("");
    
    menu();
}

function editarProducto() {
    if(productos.length === 0) {
        console.log("No hay productos para editar");

        menu();

        return;
    }
}
console.log("\n===== EDITAR PRODUCTO =====");
for(let i = 0; i < productos.length; i++) {
    console.log(
        (i+1)+
        ". Nombre: " + productos[i].nombre + 
        " | Precio: $" + productos[i].precio 
    );
    console.log("");

    menu();
}
          
