// Type your code here
let [x,y,...z] = process.argv;
console.log(`\nRoute to node.js: ${x} \nRoute to this file: ${y} \n`);
let p = parameter();
let xx = del(p);
let orden = z.sort(); //ordena el array de menor a mayor.
let result = z.reduce((ac, el, i, z) => el!==z[i-1] ? ac.concat(el) : ac, [])//Elimina elementos duplicados.
//Funcion para capturar parametro a borrar.
function parameter() {
    for (let i = 0; i < z.length; i++) {
        if (z[i] === "-r") {
            let pp = z[i+1];
            return pp;
        } else {
            continue;
        }
    }
}
//Funcion para borrar parametro capturado.
function del (p) {
    for (let i = 0; i < z.length; i++) {
        if (z[i] === p) {
            let zz = z.splice(i,1,);
        }
    }
    del2();
}
//Funcion para borrar parametro "-r"
function del2() {
    for (let i = 0; i < z.length; i++) {
        if (z[i] === "-r") {
            let mm = z.splice(i,1,);
        }
    }
}
//Funcion para imprimir parametros en orden y cantidad
function print () {
    for (let i = 0; i < result.length; i++) {
        console.log(`${result[i]}:`);     
    }    
}
//console.log(p);
//console.log(orden);
//console.log(printed);
print();