// requires

const fs = require('fs');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base))
            return reject('La base no es un numero');

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        console.log(data, (err) => {
            if (err)
                reject(err)
            else
                resolve(data)
        });
    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base))
            return reject('La base no es un numero');

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla_${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`./tablas/tabla_${base}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}