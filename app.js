const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por_hacer/por_hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;
    case 'listar':
        //console.log('Mostrar tareas por hacer');
        let listado = porHacer.getListado();

        console.log('===========HACER==========');
        for (let tarea of listado) {
            console.log(`Descrp: ${tarea.descripcion} Estado: , ${tarea.completado}`.green);
        }
        console.log('==========================');

        break;
    case 'actualizar':
        let actualiza = porHacer.actualizar(argv.descripcion, argv.estado)
        console.log(actualiza);
        break;

    case 'borrar':
        let borra = porHacer.borrar(argv.descripcion)
        console.log(borra);
        break;

    default:
        console.log('comando no reconocido');
        break;
}