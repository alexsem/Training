let empleados = [{
    id: 1,
    nombre: 'Alejandro'
}, {
    id: 2,
    nombre: 'Sulma'
}, {
    id: 3,
    nombre: 'Damian'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario });
    }
}

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe el empleado con id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(respuesta);
        }
    })
});