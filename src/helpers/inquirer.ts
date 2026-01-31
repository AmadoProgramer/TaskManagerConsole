import inquirer from 'inquirer';
import 'colors';
import Tarea from '../models/tarea.js';

interface QuestionChoice {
    name: string;
    value: string;
}

interface InquirerResponse {
    opcion?: string;
    enter?: string;
    desc?: string;
    id?: string;
    ok?: boolean;
    ids?: string[];
}

const preguntas = [
    {
        type: 'list' as const,
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
            {
                name: `${'3.'.green} Listar tareas completadas`,
                value: '3'
            },
            {
                name: `${'4.'.green} Listar tareas pendientes`,
                value: '4'
            },
            {
                name: `${'5.'.green} Completar tarea(s)`,
                value: '5'
            },
            {
                name: `${'6.'.green} Borrar tarea`,
                value: '6'
            },
            {
                name: `${'0.'.green} Salir`,
                value: '0'
            },
        ]
    }
];

export const inquireMenu = async (): Promise<string> => {
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opcion:');
    console.log('=========================\n'.green);

    const response = await inquirer.prompt<InquirerResponse>(preguntas);
    return response.opcion || '';
};

export const pausa = async (): Promise<void> => {
    const question = [
        {
            type: 'input' as const,
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`,
        }
    ];
    await inquirer.prompt<InquirerResponse>(question);
};

export const leerInput = async (message: string): Promise<string> => {
    const question = [
        {
            type: 'input' as const,
            name: 'desc',
            message,
            validate(value: string): boolean | string {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const response = await inquirer.prompt<InquirerResponse>(question);
    return response.desc || '';
};

export const listadoTareasBorrar = async (tareas: Tarea[]): Promise<string> => {
    const choices: QuestionChoice[] = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        };
    });

    choices.unshift({
        value: '0',
        name: '0'.green + ' Cancelar Operacion'
    });

    const pregunta = [
        {
            type: 'list' as const,
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const response = await inquirer.prompt<InquirerResponse>(pregunta);
    return response.id || '';
};

export const confirmar = async (message: string): Promise<boolean> => {
    const question = [
        {
            type: 'confirm' as const,
            name: 'ok',
            message
        }
    ];

    const response = await inquirer.prompt<InquirerResponse>(question);
    return response.ok || false;
};

export const mostrarListadoChecklist = async (tareas: Tarea[]): Promise<string[]> => {
    const choices: any[] = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: tarea.completadoEn ? true : false
        };
    });

    const pregunta = [
        {
            type: 'checkbox' as const,
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];

    const response = await inquirer.prompt<InquirerResponse>(pregunta);
    return response.ids || [];
};
