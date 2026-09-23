const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output }); // esto es para leer desde la consola

let productos = [
  { nombre: "Café Americano", precio: 15, categoria: "Bebida" },
  { nombre: "Chocolate Caliente", precio: 18, categoria: "Bebida" },
  { nombre: "Té", precio: 12, categoria: "Bebida" },
  { nombre: "Agua de sabor", precio: 10, categoria: "Bebida" },
  { nombre: "Refresco", precio: 15, categoria: "Bebida" },
  { nombre: "Pan Dulce", precio: 10, categoria: "Postre" },
  { nombre: "Dona", precio: 12, categoria: "Postre" },
  { nombre: "Galletas", precio: 8, categoria: "Postre" },
  { nombre: "Sandwich", precio: 25, categoria: "Postre" },
  { nombre: "Torta", precio: 30, categoria: "Postre" },
  { nombre: "Papas fritas", precio: 15, categoria: "Postre" },
  { nombre: "Fruta picada", precio: 15, categoria: "Postre" },
  { nombre: "Yogurt", precio: 15, categoria: "Postre" },
  { nombre: "Gelatina", precio: 10, categoria: "Postre" }];

//funcion para mostrar el menu
async function menu(){

    console.log("\n==== SISTEMA DE COCINA =====\n")
    console.log("1. Agregar producto");
    console.log("2. Mostrar productos");
    console.log("3. Editar producto");
    console.log("4. Buscar producto")
    console.log("5. Eliminar producto");
    console.log("6. Salir");

    let opcion = await rl.question("Seleccione una opción: ");
    switch(opcion) {

            case "1":
                agregarProducto();
                break;
            case "2":
                mostrarProductos();
                break;
            case "3":
                editarProducto();
                break;
            case "4":
                buscarProducto();
                break;
            case "5":
                eliminarProducto();
                break;
            case "6": 
                console.log("Saliendo del sistema...");
                rl.close();
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
                menu();
    }
}

//Funcion para agregrar productos
 async function agregarProducto() {
    
    let nombre = await rl.question("Ingrese el nombre del producto: ");
    let precio = await rl.question("Ingrese el precio del producto: ");

    let producto = {
                nombre: nombre,
                precio: precio
            }

            productos.push(producto);
            console.log("\nProducto agregado correctamente.\n");
            menu();

        
    
}

//funcion para mostrar productos      
function mostrarProductos() {
    
    console.log("\n===== PRODUCTOS =====\n")
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

//funcion para editar productos
async function editarProducto() {
  
    if(productos.length === 0) {
        console.log("\nNo hay productos para editar.\n");

        menu();

        return;
    }
    
    console.log("\n===== EDITAR PRODUCTOS =====\n");
    
    for(let i = 0; i < productos.length; i++) {
        console.log(
        (i+1)+ ". " + 
        productos[i].nombre + 
        " - $" + 
        productos[i].precio        
        ); 
    }

    let numero = await rl.question("\nIngresa el número del producto que quieres editar:");

    let posicion = parseInt(numero) - 1;

        if (posicion >= 0 && posicion < productos.length){
            
            let nombre = await rl.question("Ingrese el nuevo nombre del producto: ");
            let precio = await rl.question("Ingrese el nuevo precio del producto: ");

                    productos[posicion].nombre = nombre;
                    productos[posicion].precio = parseFloat(precio);

                    console.log("\nProducto editado correctamente.\n");
                    menu();
        
            }else{
            
                console.log("\nNumero de producto invalido.\n");
                menu();
            }
    }    
    


async function buscarProducto(){
    console.log("==== BUSCAR PRODUCTOS ====")
    console.log("1. Productos caros")
    console.log("2. Productos baratos")
    console.log("3. Bebidas")
    console.log("4. Postres")
    console.log("5. Regresar al menu")
    
    let opcionn = await rl.question("Seleccione una opcion: ");
    switch(opcionn){
        case "1":
            let productosCaros = productos.filter(producto => producto.precio > 20);
            console.log("Productos caros:");
            productosCaros.forEach(producto => {
                    console.log(producto.nombre + " - $" + producto.precio);
                }); 
                buscarProducto();
                break;
            case "2":
                let productosBaratos = productos.filter(producto => producto.precio <= 20);
                console.log("Productos baratos:");
                productosBaratos.forEach(producto => {
                    console.log(producto.nombre + " - $" + producto.precio);
                });
                buscarProducto();
                break;
            case "3":
                let bebidas = productos.filter(producto => producto.categoria === "Bebida");
                console.log("Bebidas:");
                bebidas.forEach(producto => {
                    console.log(producto.nombre + " - $" + producto.precio);
                });
                buscarProducto();
                break;
            case "4":
                let postres = productos.filter(producto => producto.categoria === "Postre");
                console.log("Postres:");
                postres.forEach(producto => {
                    console.log(producto.nombre + " - $" + producto.precio);
                });
                buscarProducto();
                break;
            case "5":
                menu();
                break;
            default:
                console.log("Opcion invalida")
        }
    
    
}
    
async function eliminarProducto() {

    if(productos.length === 0) {

        console.log("\nNo hay productos para eliminar.\n");

        menu();

        return;
    }

    console.log("\n===== ELIMINAR PRODUCTOS =====\n");
    
    for(let i = 0; i < productos.length; i++) {
        
        console.log(
            (i+1)+ ". " + 
            productos[i].nombre + 
            " - $" + 
            productos[i].precio        
        ); 
    }

    let numero = await rl.question("\nIngresa el número del producto que quieres eliminar:");

        let posicion = parseInt(numero) - 1;

        if (posicion >= 0 && posicion < productos.length) {

            productos.splice(posicion, 1);
            console.log("\nProducto eliminado correctamente.\n");           
    }else{
        console.log("\nNumero de producto invalido.\n");
    }

    menu();

    
}

//Inicia el menu
menu();

          
