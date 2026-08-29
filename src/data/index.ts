// src/data/index.ts
import type { Project, Skill } from '../types';

export const personalInfo = {
  name: 'Alan V.',
  title: 'Estudiante de Licenciatura en ingeniería en desarrollo de software',
  email: 'alanvaro1117@gmail.com',
  phone: '+52 664 821 4996',
  github: 'https://github.com/Alan-Daniel-Vargas-Rocha',
  linkedin: 'https://www.linkedin.com/in/alan-vargas-5b564833b/',
  description: 'Estudiante de Ingeniería en Desarrollo de Software en CESUN. Me especializo en crear soluciones prácticas: desde gestores de datos con C# y SQL Server, hasta automatización y monitoreo ambiental con Python, ESP32 y Arduino. Busco aplicar mis conocimientos en entornos industriales, con enfoque en control, registro de datos y mejora de procesos.',
  stats: [
    { value: '3+', label: 'Años codificando' },
    { value: '5+', label: 'Proyectos completados' },
    { value: '3', label: 'Tecnologías dominadas' }
  ]
};

export const skills: Skill[] = [
  { name: 'C#', icon: 'SiSharp', color: 'text-purple-400' },
  { name: 'JavaScript', icon: 'SiJavascript', color: 'text-yellow-400' },
  { name: 'Python', icon: 'SiPython', color: 'text-blue-400' },
  { name: 'React', icon: 'SiReact', color: 'text-cyan-400' },
  { name: 'Unity', icon: 'SiUnity', color: 'text-gray-300' },
  { name: 'Arduino', icon: 'SiArduino', color: 'text-green-400' },
  // --- AGREGAR NUEVOS SI ES NECESARIO ---
  { name: 'SQL Server', icon: 'SiMicrosoftsqlserver', color: 'text-red-400' },
  
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'API REST con FastAPI',
    description: 'API RESTful con autenticación y documentación automática.',
    fullDescription: 'API RESTful desarrollada con FastAPI y Python, incluyendo autenticación JWT, validación de datos con Pydantic y documentación automática con Swagger. Utiliza SQLAlchemy para la base de datos local.',
    image: './assets/FastAPI.png',
    video: './assets/API.mp4', // ← Nueva propiedad opcional para video
    tech: 'Python',
    category: 'Web',
    isExecutable: false,
    githubUrl: 'https://github.com/Alan-Daniel-Vargas-Rocha/API-de-colecci-n-personal-de-pel-culas.git',
  },
  {
    id: 2,
    title: 'Gestor de videojuegos',
    description: 'Gestor de videojuegos con React para agregar, editar y eliminar juegos.',
    fullDescription: 'Aplicación web completa para gestionar colecciones de videojuegos, con búsqueda, filtros y base de datos local. Desarrollada con React, JavaScript y CSS, permite a los usuarios mantener un registro organizado de su biblioteca de juegos.',
    image: './assets/vid.png',
    tech: 'React, JavaScript',
    category: 'Web',
    isExecutable: false,
    githubUrl: 'https://alan-daniel-vargas-rocha.github.io/Gestor-videojuegos/',
    URL: 'https://alan-daniel-vargas-rocha.github.io/Gestor-videojuegos/',
  },
  {
    id: 3,
    title: 'Entorno 3D con Unity',
    description: 'Prototipo de juego de plataformas 3D con mecánicas de salto y enemigos.',
    fullDescription: 'Prototipo de juego 3D desarrollado en Unity con mecánicas de plataformas, sistema de puntuación y enemigos con IA básica. Incluye escenarios diseñados en Blender y sistema de colección de objetos.',
    image: './assets/videojuego.png',
    video: './assets/Entorno-3D.mp4', // ← Nueva propiedad opcional para video
    tech: 'C#, Unity',
    category: 'Unity',
    isExecutable: false,
    downloadUrl: 'https://drive.google.com/uc?export=download&id=TU_ID_DE_ARCHIVO', // ← Enlace a Google Drive
    githubUrl: 'https://github.com/Alan-Daniel-Vargas-Rocha/juego-unity',
  },
  {
    id: 4,
    title: 'Calculadora Científica TKinter',
    description: 'Calculadora científica con interfaz gráfica, compilada a .exe para Windows.',
    fullDescription: 'Calculadora científica con funciones avanzadas (seno, coseno, logaritmos, exponenciales), empaquetada como un archivo .exe para que cualquier usuario de Windows pueda usarla sin instalar Python. Desarrollada con Python y TKinter.',
    image: './assets/CalculadoraTK.png',
    video: './assets/CalculadoraTK.mp4', // ← Nueva propiedad opcional para video
    tech: 'Python',
    category: 'Python',
    isExecutable: false,
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1ABCDEFGHIJKLMNOPQRST', // ← Reemplaza con tu ID de Google Drive
    githubUrl: 'https://github.com/Alan-Daniel-Vargas-Rocha/calculadora-tkinter',
  },
  {
    id: 5,
    title: 'Sistema gestor de clientes',
    description: 'Sistema para gestionar clientes usando C# y SQL Server.',
    fullDescription: 'Aplicación de escritorio que permite gestionar clientes y sus datos, con funcionalidades de alta, baja, modificación y consulta. Desarrollada en C# con SQL Server como base de datos.',
    image: './assets/Gestor_Clientes.png',
    tech: 'C#, SQL Server',
    category: 'C#',
    isExecutable: false,
    githubUrl: 'https://github.com/Alan-Daniel-Vargas-Rocha/Sistema-gestor-Clientes.git',
  },
  {
    id: 6,
    title: 'Sistema de gestión de proyectos',
    description: 'Sistema para gestionar proyectos y tareas en C# y SQL Server.',
    fullDescription: 'Sistema de gestión de proyectos con funcionalidades para crear, asignar y seguir tareas, utilizando C# y SQL Server para la base de datos. Incluye reportes y seguimiento de estados.',
    image: './assets/Gestor_proyectos.png',
    tech: 'C#, SQL Server',
    category: 'C#',
    isExecutable: false,
    githubUrl: 'https://github.com/Alan-Daniel-Vargas-Rocha/Gestor-de-proyecto.git',
  },
  {
    id: 7,
    title: 'Sistema de control ambiental',
    description: 'Monitoreo de temperatura, gas y humedad con ESP32 y ThingsBoard.',
    fullDescription: 'Sistema que monitorea y controla variables ambientales como temperatura, gas y humedad, utilizando sensores conectados a un microcontrolador ESP32 y visualización en un dashboard de ThingsBoard.cloud.',
    image: './assets/IoT-ambiente.png',
    tech: 'Arduino',
    category: 'IoT',
    isExecutable: false,
    githubUrl: '',
  }
];