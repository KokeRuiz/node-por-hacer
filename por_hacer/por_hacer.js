const fs = require('fs');


let listadoPorHacer = [];

const cargarDB = () => {

    try {
        listadoPorHacer = require(`../db/data.json`);
    } catch (err) {
        listadoPorHacer = [];
    }

    //console.log(listadoPorHacer);
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./db/data.json`, data, (err) => {
        if (!err) {
            console.log(`Json actualizado correctamente`);
        } else {
            throw new Error(err);
        }
    })
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();
    return porHacer;
}


const getListado = () => {

    cargarDB();

    return listadoPorHacer;
}

const actualizar = (descripcion, estado = true) => {

    cargarDB();

    //console.log(descripcion);

    let index = listadoPorHacer.findIndex(tarea => {
        tarea.descripcion === descripcion;
        return tarea.descripcion;
    });

    //console.log(index);

    if (index >= 0) {
        listadoPorHacer[index].completado = estado;
        guardarDB();
        return true;
    } else {

        return false;
    }


}

const borrar = (descripcion) => {

    cargarDB();

    console.log(descripcion);

    let nuevoListadoPorHacer = listadoPorHacer.filter(tarea => {

        return tarea.descripcion !== descripcion;
    });

    console.log(nuevoListadoPorHacer);

    if (nuevoListadoPorHacer.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListadoPorHacer;
        guardarDB();
        return true;
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}