import 'inquirer';
import 'colors';


// const mostrarMenu = await inquirer.prompt([
//     {
//         type: 'list',
//         name: 'theme',
//         message: `
//         =====================
//         Selecciona una opción
//         =====================
//         `,
//         choices: [
//             {name: 'Crear Tarea', value: '1'},
//             {name: 'Listar tarea', value: '2'},
//             {name: 'Listar tareas completadas', value: '3'},
//         ]
//     }
// ]);

//  const mostrarMenu = () => { /* Mostramos el menu de consola en la funcion
//                             flecha mostrarMenu*/

//         console.clear();
//         console.log('========================='.green);
//         console.log('  Seleccione una opcion:'.green);
//         console.log('=========================\n'.green);
    
//         console.log(`${ '1.'.green } Crear tarea`);
//         console.log(`${ '2.'.green } Listar tarea`);
//         console.log(`${ '3.'.green } Listar tareas completadas`);
//         console.log(`${ '4.'.green } Listar tareas pendientes`);
//         console.log(`${ '5.'.green } Completar tarea(s)`);
//         console.log(`${ '6.'.green } Borrar tarea`);
//         console.log(`${ '7.'.green } Salir\n`);
    
//         /* En este metodo utilizamos la libreria readline
//            la cual se basa en leer consola creando interfaz y 
//            recibiendo opciones.
           
//            Podemos visualizar como se usan las librerias de inputs 
//            y outputs como stdin y stdout propias de C*/
//         const readLine = require('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
    
//         // Utilizamos readline que contiene un callback para cerrar opcion.
//         readLine.question('Seleccione una opción: ', (opt) => {
//             readLine.close();
//             resolve(opt);
//         });
                            
// };

// Funcion pausa para que detenga o continue la insercion de opciones
export const pausa = () => {
    
    return new Promise( resolve => {
        
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readLine.question(`\nPresione ${ 'ENTER'.green } para continuar `, (opt) => {
            readLine.close();
            resolve()
        });
    });
}