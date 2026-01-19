# Task Manager Console

Una aplicación de consola interactiva construida con Node.js para gestionar tareas y listas de pendientes. Permite crear, listar, completar y eliminar tareas con interfaz amigable en la terminal.

## 📋 Características

- ✅ **Crear tareas**: Añade nuevas tareas a tu lista
- 📝 **Listar tareas**: Visualiza todas tus tareas
- ✔️ **Marcar como completada**: Indica qué tareas ya finalizaste
- 🔄 **Listar tareas completadas/pendientes**: Filtra por estado
- 🗑️ **Eliminar tareas**: Borra tareas de la lista
- 💾 **Persistencia de datos**: Las tareas se guardan automáticamente en un archivo JSON

## 🚀 Requisitos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes)

## 📦 Instalación

1. Clona o descarga este proyecto
2. Navega al directorio del proyecto:
   ```bash
   cd "06 - TasksManagerConsole"
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## 💻 Uso

Ejecuta la aplicación con:
```bash
node app.js
```

Luego sigue las instrucciones del menú interactivo:
- **Opción 1**: Crear una nueva tarea
- **Opción 2**: Ver todas las tareas
- **Opción 3**: Listar tareas completadas
- **Opción 4**: Listar tareas pendientes
- **Opción 5**: Completar tarea
- **Opción 6**: Borrar tarea
- **Opción 0**: Salir

## 📁 Estructura del Proyecto

```
├── app.js                    # Archivo principal de la aplicación
├── package.json             # Dependencias del proyecto
├── models/
│   ├── tarea.js            # Modelo de una tarea individual
│   └── tareas.js           # Gestión de la colección de tareas
├── helpers/
│   ├── inquirer.js         # Interfaz interactiva de menús
│   ├── guardarArchivo.js   # Funciones de persistencia de datos
│   └── mensajes.js         # Mensajes de la aplicación
├── db/
│   └── data.json           # Base de datos local (se crea automáticamente)
└── index.html              # Archivo de referencia
```

## 🔧 Dependencias

- **colors**: Para colorear la consola y mejorar la experiencia visual
- **inquirer**: Para crear menús interactivos en la terminal
- **uuid**: Para generar IDs únicos para cada tarea

## 📝 Notas de Implementación

### ⚠️ ESM (ES Modules)

Este proyecto utiliza **ES Modules** en lugar de Common JS. Esto significa que se utilizan importaciones modernas:

**Correcto:**
```javascript
import inquirer from 'inquirer';
```

**No recomendado (Common JS):**
```javascript
const inquirer = require('inquirer');
```

La configuración de módulos está especificada en `package.json` con `"type": "module"`.

## 👨‍💻 Autor

Proyecto desarrollado como proyecto personalizado para practicar aplicaciones en consola en Node.js

## 📄 Licencia

ISC