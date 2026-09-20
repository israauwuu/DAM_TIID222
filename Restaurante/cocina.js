const readline = require("readline"); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout 
});

let productos = [];

//funcion para mostrar el menu
function menu(){

    console.log("\n==== SISTEMA DE COCINA =====\n")
    console.log("1. Agregar producto");
    console.log("2. Mostrar productos");
    console.log("3. Editar producto");
    console.log("4. Eliminar producto");
    console.log("5. Salir");

    rl.question("Seleccione una opción: ", function(opcion) {

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
                eliminarProducto();
                break;
            case "5":
                console.log("Saliendo del sistema...");
                rl.close();
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
                menu();
        }
    });
}

//Funcion para agregrar productos
function agregarProducto() {
    
    rl.question("Ingrese el nombre del producto: ", function(nombre) {
        rl.question("Ingrese el precio del producto: ",function(precio){
            
            let producto = {
                nombre: nombre,
                precio: precio
            }

            productos.push(producto);
            console.log("\nProducto agregado correctamente.\n");
            menu();

        });
    });
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
function editarProducto() {
  
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

    rl.question("\nIngresa el número del producto que quieres editar:", function(numero) {
    
        let posicion = parseInt(numero) - 1;

        if (posicion >= 0 && posicion < productos.length){
            
            rl.question("Ingrese el nuevo nombre del producto: ", function(nombre){

                rl.question("Ingrese el nuevo precio del producto: ", function(precio){

                    productos[posicion].nombre = nombre;
                    productos[posicion].precio = parseFloat(precio);

                    console.log("\nProducto editado correctamente.\n");
                    menu();
                    }
                );
            }
        );
        
            }else{
            
                console.log("\nNumero de producto invalido.\n");
                menu();
            }
        }
    );
}
    
function eliminarProducto() {

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

    rl.question("\nIngresa el número del producto que quieres eliminar:", function(numero){

        let posicion = parseInt(numero) - 1;

        if (posicion >= 0 && posicion < productos.length) {

            productos.splice(posicion, 1);
            console.log("\nProducto eliminado correctamente.\n");           
    }else{
        console.log("\nNumero de producto invalido.\n");
    }

    menu();

    });
}

//Inicia el menu
menu();

          
