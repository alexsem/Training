setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);

getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Alejandro',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la DB`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos ', usuario)
})