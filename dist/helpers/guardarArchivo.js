import * as fs from 'node:fs';
import Tarea from '../models/tarea.js';
const archivo = './db/data.json';
export const guardarDB = (data) => {
    const tareasData = data.map(tarea => ({
        id: tarea.id,
        desc: tarea.desc,
        completadoEn: tarea.completadoEn,
    }));
    fs.writeFileSync(archivo, JSON.stringify(tareasData, null, 2));
};
export const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    return data;
};
//# sourceMappingURL=guardarArchivo.js.map