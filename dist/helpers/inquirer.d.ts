import 'colors';
import Tarea from '../models/tarea.js';
export declare const inquireMenu: () => Promise<string>;
export declare const pausa: () => Promise<void>;
export declare const leerInput: (message: string) => Promise<string>;
export declare const listadoTareasBorrar: (tareas: Tarea[]) => Promise<string>;
export declare const confirmar: (message: string) => Promise<boolean>;
export declare const mostrarListadoChecklist: (tareas: Tarea[]) => Promise<string[]>;
//# sourceMappingURL=inquirer.d.ts.map