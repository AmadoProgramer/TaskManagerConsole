import inquirer from 'inquirer';
import 'colors';


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                name: `${'1.'.green} Crear Tarea`,
                value: '1'
            },
            {
                name: `${'2.'.green} Listar tarea`, 
                value: '2'
            },
            {   name: `${'3.'.green} Listar tareas completadas`, 
                value: '3'
            },
            {   name: `${'4.'.green} Listar tareas pendientes`, 
                value: '4'
            },
            {   name: `${'5.'.green} Completar tarea(s)`, 
                value: '5'
            },
            {   name: `${'6.'.green} Borrar tarea`, 
                value: '6'
            },
            {   name: `${'0.'.green} Salir`, 
                value: '0'
            },
        ]
    }
]


export const inquireMenu = async() => {
    
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opcion:');
    console.log('=========================\n'.green);
    
    const { opcion } = await inquirer.prompt(preguntas);
    
    return opcion;
    
}

export const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`,
        }
    ]
    //console.log('\n');
    await inquirer.prompt(question);    
}

export const leerInput = async( message ) => {

    const question = [
        {
            type:'input',
            name: 'desc',
            message,
            validate( value ){
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc;
}

export const listadoTareasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green;
        
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
        
    });

    choices.unshift({
        value: '0',
        name: '0'.green + ' Cancelar Operacion'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

export const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

export const mostrarListadoChecklist = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green;
        
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
        
    });

        
    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

