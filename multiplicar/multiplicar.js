//Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    //Mostrar en consola la tabla de multiplicar
    // a partir de la base y el limite

    console.log('===================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('===================='.green);

    let data = '';
    for (let i = 1; i <= limite; i++) {
        let resultado = base * i;
        data += `${base} * ${i} = ${resultado}\n`;
    }
    console.log(data);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido para crear la tabla de multiplicar no es un número');
            return;
        }

        let data = '';

        //Sacar por consola la tabla del 2 o de la variable base
        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} * ${i} = ${resultado}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}