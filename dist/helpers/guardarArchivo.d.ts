import Tarea from '../models/tarea.js';
interface TareaData {
    id: string;
    desc: string;
    completadoEn: string | null;
}
export declare const guardarDB: (data: Tarea[]) => void;
export declare const leerDB: () => TareaData[] | null;
export {};
//# sourceMappingURL=guardarArchivo.d.ts.map