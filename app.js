import colors from 'colors';
import { inquireMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
} from './helpers/inquirer.js';
import Tareas from './models/tareas.js';
import { guardarDB,leerDB } from './helpers/guardarArchivo.js';

//Mantenemos consola limpia en cada recarga


console.clear();

const main = async () => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    

    if (tareasDB) {
        //Establecer tareas
        tareas.cargarTareasFromArray(tareasDB);
    }


    do {
        //Imprime el menu principal
        opt = await inquireMenu();
        
        //Seleccionamos una opcion del menu a realizar
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea( desc ); //Creamos tarea y añadimos a la lista de tareas
            break;
            
            case '2':
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
                
            case '4':
                tareas.listarPendientesCompletadas(false);        
            break;

            case '5'://Completado | Pendiente
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
                // console.log(ids);
            break;

            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== '0'){
                    
                    const ok = await confirmar('¿Estas seguro?');
                    if( ok ){    
                        tareas.borrarTarea(id)
                        console.log('\n¡Tarea eliminada correctamente!\n')
                    }else{

                        console.log('\nProceso cancelado exitosamente!\n');
                    }
                }
            break; 
            
            case '0':
                const ok = await confirmar('¿Estas seguro?');
                    if( ok ){    
                        console.log('\n Sesion Finalizada! \n')
                    }else{
                        main();
                    }
            break;
        }
        
        guardarDB(tareas.listadoArr)
        //Retorna al menu principal
        if(opt !== '0'){
            await pausa();
        }
    } while (opt !== '0');
    
}

main();