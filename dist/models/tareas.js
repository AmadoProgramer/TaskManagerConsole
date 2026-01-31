import Tarea from './tarea.js';
import 'colors';
export default class Tareas {
    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            if (tarea) {
                listado.push(tarea);
            }
        });
        return listado;
    }
    constructor() {
        this._listado = {};
        this._listado = {};
    }
    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }
    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    cargarTareasFromArray(tareas) {
        tareas.forEach(tarea => {
            const nuevaTarea = new Tarea(tarea.desc);
            nuevaTarea.id = tarea.id;
            nuevaTarea.completadoEn = tarea.completadoEn;
            this._listado[tarea.id] = nuevaTarea;
        });
    }
    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${idx}. ${desc} :: ${estado}`);
        });
        console.log();
    }
    listarPendientesCompletadas(completadas = true) {
        console.log();
        let contador = 0;
        this.listadoArr.forEach(tarea => {
            const { desc, completadoEn } = tarea;
            if (completadas && completadoEn) {
                contador += 1;
                console.log(`${(contador + '.').green} ${desc} :: ${completadoEn.green}`);
            }
            else if (!completadas && !completadoEn) {
                contador += 1;
                console.log(`${(contador + '.').green} ${desc} :: ${'Pendiente! '.red}`);
            }
        });
        console.log();
    }
    toggleCompletadas(ids) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (tarea && !tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });
        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id) && this._listado[tarea.id]) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}
//# sourceMappingURL=tareas.js.map