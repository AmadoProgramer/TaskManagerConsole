import Tarea from './tarea.js';
import 'colors';

interface TareaData {
    id: string;
    desc: string;
    completadoEn: string | null;
}

export default class Tareas {
    private _listado: Record<string, Tarea> = {};

    get listadoArr(): Tarea[] {
        const listado: Tarea[] = [];
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
    }

    borrarTarea(id: string = ''): void {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    crearTarea(desc: string = ''): void {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas: TareaData[]): void {
        tareas.forEach(tarea => {
            const nuevaTarea = new Tarea(tarea.desc);
            nuevaTarea.id = tarea.id;
            nuevaTarea.completadoEn = tarea.completadoEn;
            this._listado[tarea.id] = nuevaTarea;
        });
    }

    listadoCompleto(): void {
        console.log();
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${idx}. ${desc} :: ${estado}`);
        });
        console.log();
    }

    listarPendientesCompletadas(completadas: boolean = true): void {
        console.log();
        let contador = 0;
        this.listadoArr.forEach(tarea => {
            const { desc, completadoEn } = tarea;
            if (completadas && completadoEn) {
                contador += 1;
                console.log(`${(contador + '.').green} ${desc} :: ${completadoEn.green}`);
            } else if (!completadas && !completadoEn) {
                contador += 1;
                console.log(`${(contador + '.').green} ${desc} :: ${'Pendiente! '.red}`);
            }
        });
        console.log();
    }

    toggleCompletadas(ids: string[]): void {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (tarea && !tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                const tareaEnListado = this._listado[tarea.id];
                if (tareaEnListado) {
                    tareaEnListado.completadoEn = null;
                }
            }
        });
    }
}
