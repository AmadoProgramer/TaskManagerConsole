import { v4 as uuidv4 } from 'uuid';

export default class Tarea {
    id: string;
    desc: string;
    completadoEn: string | null;

    constructor(desc: string) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}
