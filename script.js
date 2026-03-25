let movimientos = [];
let continuar = "si";

//While repeticion
while (continuar.toLowerCase() === "si") {
    registrar();
    continuar = prompt("¿Desea continuar? (si/no)");
}

//Guardado de variables
let totalIngresos = 0;
let totalEgresos = 0;

//recolecta con push la informacion de las funciones y lo muestra, para luego filtrarlo segun el tipo 
//[i] almacena informacion segun el tipo de variable, lo procesa, segun el tipo de movimiento y lo muestra
for (let i = 0; i < movimientos.length; i++) {
    console.log(
        `Tipo: ${movimientos[i].tipo} | Nombre: ${movimientos[i].nombre} | Monto: S/${movimientos[i].monto}`
    );

    if (movimientos[i].tipo === "ingreso") {
        totalIngresos += movimientos[i].monto;
    } else {
        totalEgresos += movimientos[i].monto;
    }

}
let saldo = totalIngresos - totalEgresos
;
//Imprime el total de ingresos,egresos, y saldo
console.log("Total ingresos:", totalIngresos);
console.log("Total egresos:", totalEgresos);
console.log("Saldo final:", saldo);

//Funciones

//funcion registrar
function registrar(){
    let tipo = prompt("ingrese tipo de ingreso/egreso")
    if (tipo==="ingreso" || tipo ==="egreso") {
            console.log(`Seleccionaste ${tipo}`)
            let nombre_operacion =prompt(`Ingresaste operacion ${tipo} elige el nombre:`)
            if (nombre_operacion && nombre_operacion.trim() !="" ){
                ingreso_egreso(tipo,nombre_operacion);
            }
    }else{
        console.log("escriba una opcion valida")
        return

    }

}
//funcion ingreso_egreso
function ingreso_egreso(tipo, nombre_operacion){
    if (tipo=== "ingreso"){
        console.log(`Operacion: ${tipo} nombre: ${nombre_operacion}`)
        let ingreso_operacion = prompt("Ingrese cuanto dinero quiere depositar")
        if (true){
            console.log(`Ingresó S/${ingreso_operacion} `)
            console.log(`Este es el dinero que ingreso: ${ingreso_operacion}, Nombre operacion: ${nombre_operacion}`)
                   //recolecta la informacion de ingreso, como tipo, nombre,y monto para almacenarlo
                    movimientos.push({
                        tipo: tipo,
                        nombre: nombre_operacion,
                        monto: Number(ingreso_operacion)
                    });            
        }

            
   } else if (tipo==="egreso"){
            console.log(`Operacion: ${tipo} nombre: ${nombre_operacion}`)
        let egreso_operacion = prompt("Ingrese cuanto dinero quiere retirar")
        if (true){
               console.log(`retiro S/${egreso_operacion} `)
               console.log(`Este es el dinero que retiro:: ${egreso_operacion}, Nombre operacion: ${nombre_operacion}`)
               //recolecta la informacion deegreso, como tipo, nombre,y monto para almacenarlo
               movimientos.push({
                    tipo: tipo,
                    nombre: nombre_operacion,
                    monto: Number(egreso_operacion)
                });
        }
   }
}

