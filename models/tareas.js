/**
 * 
 */

import Tarea from './tarea.js';
import 'colors';

export default class Tareas{

    _listado = {};
    //Aqui obtengo un listado del arreglo mediante el metodo Object.keys
    get listadoArr(){
        const listado = [];
        //Se utiliza el forEach para el arreglo que devuelve
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea( id = '' ){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    crearTarea( desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas = []){
       
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
        
    }
    
    listadoCompleto(){
        console.log();
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red
            console.log(`${ idx }. ${ desc } :: ${ estado }`);
        });
        console.log();
    }

    listarPendientesCompletadas( completadas = true ){

        console.log();
        let contador = 0;
        this.listadoArr.forEach((tarea) => {
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red
            if (completadas && completadoEn) {
                contador += 1;
                console.log(`${(contador + '.').green} ${ desc } :: ${ completadoEn.green }`);
            } else if(!completadas && !completadoEn){
                contador += 1;
                console.log(`${(contador + '.').green} ${ desc } :: ${'Pendiente! '.red }`);
            }
        });
        console.log()
    }

    toggleCompletadas(ids = []){

        ids.forEach( id => {

            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

