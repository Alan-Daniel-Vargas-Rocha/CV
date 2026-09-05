import { contactInfo } from '../config.local';
import type { Project, Skill } from '../types';

export const personalInfo = {
  name: 'Alan Daniel Vargas Rocha',
  title: 'Estudiante de Ingeniería en Desarrollo de Software | CESUN',
  email: contactInfo.email,
  phone: contactInfo.phone,
  github: contactInfo.github,
  linkedin: contactInfo.linkedin,
  description: 'Soy estudiante de Ingeniería en Desarrollo de Software en CESUN, con formación técnica en Computación. Me especializo en desarrollo web con React y Node.js, aplicaciones empresariales con C# y SQL Server, y sistemas IoT con Arduino y ESP32.Me enfoco en crear soluciones funcionales con código limpio, 7 proyectos con demo en vivo y repositorio público. Inglés B2 conversacional.',
  stats: [
    { value: '3+', label: 'Años codificando' },
    { value: '5+', label: 'Proyectos completados' },
    { value: '6', label: 'Tecnologías dominadas' }
  ],
  education: [
    {
      institution: 'CESUN Universidad',
      degree: 'Ingeniería en Desarrollo de Software',
      period: '2026 - Actualidad',
      Kardex: 'https://drive.google.com/file/d/1Lz-txY-h0VZFv6XK9oGGY4xTGfsxTk1T/view?usp=sharing'
    },
    {
      institution: 'Colegio de Estudios Básicos y Bachillerato de Tijuana',
      degree: 'Carrera Técnica en Computación',
      period: '2021 - 2024',
      Certificado: 'https://drive.google.com/file/d/1aonUhE8j6wxl2SR3IGejrwgSEs4Icvfw/view?usp=sharing'
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B2' },
  ],
};

export const certificates = [
  {
    id: 1,
    name: 'Inglés B2 (Constancia)',
    issuer: 'CESUN Universidad',
    date: '2025',
    url: 'https://drive.google.com/file/d/1JdZQYyYcrlnI4zu19NSH_IoxkYwpn8bs/view?usp=sharing',
  },
  {
    id: 2,
    name: 'Comunicación efectiva para el trabajo',
    issuer: 'CESUN Universidad',
    date: '2025',
    url: 'https://drive.google.com/file/d/1kE2YgnCzTgkEDoF9VA9lRKnwI11LNiXq/view?usp=sharing',
  },
  {
    id: 1,
    name: 'Certificado de Desarrollo de Software (Cedula aprobatoria)',
    issuer: 'CESUN Universidad',
    date: '2026',
    url: 'https://drive.google.com/file/d/11h6OtpG_pib8mmTdwtYwbqN3I6sJKQaa/view?usp=sharing',
  }
  // Agrega más certificados aquí
];
export const skills: Skill[] = [
  { name: 'C#', icon: 'SiSharp', color: 'text-purple-400' },
  { name: 'Python', icon: 'SiPython', color: 'text-blue-400' },
  { name: 'JavaScript', icon: 'SiJavascript', color: 'text-yellow-400' },
  { name: 'React', icon: 'SiReact', color: 'text-cyan-400' },
  { name: 'HTML5', icon: 'SiHtml5', color: 'text-orange-500' },
  { name: 'CSS', icon: 'SiCss3', color: 'text-blue-400' },
  { name: 'SQL Server', icon: 'SiMicrosoftsqlserver', color: 'text-red-400' },
  // { name: 'Unity', icon: 'SiUnity', color: 'text-gray-300' },
  { name: 'Arduino', icon: 'SiArduino', color: 'text-green-400' },
  {name: 'Node.js', icon: 'SiNodedotjs', color: 'text-green-600' },
];


export const projects: Project[] = [
  {
    id: 1,
    title: 'API REST con FastAPI',
    description: 'API RESTful con autenticación y documentación automática.',
    fullDescription: 'API RESTful desarrollada con FastAPI y Python, incluyendo autenticación JWT, validación de datos con Pydantic y documentación automática con Swagger. Utiliza SQLAlchemy para la base de datos local.',
    image: './assets/FastAPI.png',
    video: 'https://drive.google.com/file/d/1dm2gT6hk2GAtZJbPR1Nztqlz939vzHIQ/view?usp=sharing', 
    tech: 'Python, SQL Server',
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
    tech: 'React, JavaScript, CSS, SQL Server',
    category: 'Web',
    isExecutable: false,
    githubUrl: 'https://github.com/Alan-Daniel-Vargas-Rocha/Gestor-videojuegos.git',
    URL: 'https://alan-daniel-vargas-rocha.github.io/Gestor-videojuegos/',
  },
  // {
  //   id: 3,
  //   title: 'Entorno 3D con Unity',
  //   description: 'Prototipo de juego de plataformas 3D con mecánicas de salto y enemigos.',
  //   fullDescription: 'Prototipo de juego 3D desarrollado en Unity con mecánicas de plataformas, sistema de puntuación y enemigos con IA básica. Incluye escenarios diseñados en Blender y sistema de colección de objetos.',
  //   image: './assets/videojuego.png',
  //   video: './assets/Entorno-3D.mp4', // ← Nueva propiedad opcional para video
  //   tech: 'C#, Unity',
  //   category: 'Unity',
  //   isExecutable: false,
  //   downloadUrl: 'https://drive.google.com/uc?export=download&id=TU_ID_DE_ARCHIVO', // ← Enlace a Google Drive
  //   githubUrl: 'https://github.com/Alan-Daniel-Vargas-Rocha/juego-unity',
  // },
  {
    id: 4,
    title: 'Calculadora Científica TKinter',
    description: 'Calculadora científica con interfaz gráfica, compilada a .exe para Windows.',
    fullDescription: 'Calculadora científica con funciones avanzadas (seno, coseno, logaritmos, exponenciales), empaquetada como un archivo .exe para que cualquier usuario de Windows pueda usarla sin instalar Python. Desarrollada con Python y TKinter.',
    image: './assets/CalculadoraTK.png',
    video: 'https://drive.google.com/file/d/1jHCK2LWAee9cUTaZo1KZ73U20_qviMq_/view?usp=sharing', // ← Nueva propiedad opcional para video
    tech: 'Python',
    category: 'Python',
    isExecutable: false,
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1ABCDEFGHIJKLMNOPQRST', // ← Reemplaza con tu ID de Google Drive
    githubUrl: 'https://github.com/Alan-Daniel-Vargas-Rocha/Calculadora-TK.git',
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
    video: 'https://www.youtube.com/embed/QhZ4BOD2x-I?si=Ynff2wXIOSVfSIs6',
    tech: 'Arduino',
    category: 'IoT',
    isExecutable: false,
    githubUrl: 'https://github.com/Alan-Daniel-Vargas-Rocha/sistema-control-ambiental-esp32',
    URL: 'https://thingsboard.cloud/dashboard/b847ac00-8dc3-11f1-8b3b-037118875eb0?publicId=d9444bb0-a4df-11f1-91de-5db5b2227135'
  },

  {
    id: 8,
    title: 'Sistema de control ambiental en Node.js',
    description: 'Monitoreo de temperatura, gas y humedad con ESP32 y ThingsBoard.',
    fullDescription: 'Sistema que monitorea y controla variables ambientales como temperatura, gas y humedad, utilizando sensores conectados a un microcontrolador ESP32 y visualización en un dashboard de ThingsBoard.cloud.',
    image: './assets/Fotonode-control_ambiente.png',
    video: 'https://www.youtube.com/embed/QhZ4BOD2x-I?si=Ynff2wXIOSVfSIs6',
    tech: 'Node.js',
    category: 'IoT',
    isExecutable: false,
    githubUrl: 'https://drive.google.com/uc?export=download&id=1xjkgaO_nwVUom6DRauLKkzGiLyeStICB',
    URL: 'https://alan-daniel-vargas-rocha.github.io/IoT-dashboard-DHT11-MQ2/'
  }
];