const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla multiplicar', opts)
    .command('crear', 'Crea un archivo con una base y limite', opts)
    .help()
    .argv;

module.exports = {
    argv
}