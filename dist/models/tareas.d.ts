import Tarea from './tarea.js';
import 'colors';
interface TareaData {
    id: string;
    desc: string;
    completadoEn: string | null;
}
export default class Tareas {
    private _listado;
    get listadoArr(): Tarea[];
    constructor();
    borrarTarea(id?: string): void;
    crearTarea(desc?: string): void;
    cargarTareasFromArray(tareas: TareaData[]): void;
    listadoCompleto(): void;
    listarPendientesCompletadas(completadas?: boolean): void;
    toggleCompletadas(ids: string[]): void;
}
export {};
//# sourceMappingURL=tareas.d.ts.map