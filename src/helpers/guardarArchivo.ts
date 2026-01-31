import * as fs from 'node:fs';
import Tarea from '../models/tarea.js';

const archivo = './db/data.json';

interface TareaData {
    id: string;
    desc: string;
    completadoEn: string | null;
}

export const guardarDB = (data: Tarea[]): void => {
    const tareasData: TareaData[] = data.map(tarea => ({
        id: tarea.id,
        desc: tarea.desc,
        completadoEn: tarea.completadoEn,
    }));
    fs.writeFileSync(archivo, JSON.stringify(tareasData, null, 2));
};

export const leerDB = (): TareaData[] | null => {
    if (!fs.existsSync(archivo)) {
        return null;
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data: TareaData[] = JSON.parse(info);
    return data;
};
