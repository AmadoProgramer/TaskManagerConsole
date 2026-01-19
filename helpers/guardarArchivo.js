import * as fs from 'node:fs';
const archivo = './db/data.json';

export const guardarDB = (data) =>{
    fs.writeFileSync(archivo, JSON.stringify(data));
}

export const leerDB = () => {
    //Verifica si el archivo existe y si no retorna null
    if(!fs.existsSync(archivo)){
        return null;
    }
    // lee la informacion del archivo JSON y lo imprime por consola y retorna null
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' })
    const data = JSON.parse(info);
    return data;
}