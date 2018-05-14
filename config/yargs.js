const descripcion = {
    //--descripcion -d
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea por hacer'
}


const argv = require('yargs')
    .command('crear', 'Crea tareas to do', descripcion)
    .command('actualizar', 'Crea tareas to do', { descripcion, completado })
    .command('borrar', 'Borra tareas to do', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}