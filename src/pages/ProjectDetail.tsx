import { useParams, Link } from 'react-router-dom';
import { FaDownload, FaGithub, FaArrowLeft, FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';
import { projects } from '../data';

// Obtener la base URL (ej. '/CV/')
const baseUrl = import.meta.env.BASE_URL;

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  // Función para resolver rutas de assets
  const getAssetPath = (path: string) => {
    if (path.startsWith('/')) return path;
    if (path.startsWith('./')) {
      const cleanPath = path.replace('./', '');
      return `${baseUrl}${cleanPath}`;
    }
    return path;
  };

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-400">Proyecto no encontrado</h2>
        <Link to="/" className="text-blue-400 hover:underline mt-4 block">
          Volver al inicio
        </Link>
      </div>
    );
  }

  // Resolver rutas
  const imageSrc = getAssetPath(project.image);
  const hasUrl = project.URL && project.URL.length > 0;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12">
      {/* Botón de volver */}
      <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-6">
        <FaArrowLeft /> Volver a proyectos
      </Link>

      {/* Título con indicador de URL */}
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-4xl font-bold text-white">{project.title}</h1>
        {hasUrl && (
          <span className="bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <FaGlobe className="text-xs" /> Demo disponible
          </span>
        )}
      </div>

      {/* Categoría y tecnologías (mini tags) */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          {project.category}
        </span>
        {project.tech.split(',').map((tech, i) => (
          <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
            {tech.trim()}
          </span>
        ))}
      </div>

      <div className="bg-gray-800/50 rounded-xl p-4 mb-6 flex justify-center">
        {project.video ? (
          <iframe
            src={project.video}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-lg"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
          
        ) : (
          <img 
            src={imageSrc}
            alt={project.title}
            className="max-h-80 object-contain rounded-lg"
            onError={(e) => {
              console.error('❌ Error al cargar la imagen:', imageSrc);
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/1a1a2e/ffffff?text=Imagen+no+disponible';
            }}
          />
        )}
      </div>

      {/* Descripción completa */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-400 mb-2">Descripción</h2>
        <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
      </div>

      {/* Tecnologías (detalle) */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-purple-400 mb-2">Tecnologías</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.split(',').map((tech, i) => (
            <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>

      {/* === BOTONES DE ACCIÓN === */}
      <div className="flex flex-wrap gap-4 mt-8">
        {/* Botón "Ver Demo" (si tiene URL) */}
        {hasUrl && (
          <a
            href={project.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <FaExternalLinkAlt /> Ver Demo
          </a>
        )}

        {/* Botón "Descargar .exe" (si es ejecutable) */}
        {project.isExecutable && project.downloadUrl && (
          <a
            href={project.downloadUrl}
            download
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <FaDownload /> Descargar .exe
          </a>
        )}

        {/* Botón "Ver en GitHub" (si tiene githubUrl) */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <FaGithub /> Ver en GitHub
          </a>
        )}

        {/* Mensaje si no hay acciones disponibles */}
        {!hasUrl && !project.isExecutable && !project.githubUrl && (
          <p className="text-gray-400 text-sm italic">
            Este proyecto no tiene demo, ejecutable o repositorio disponible.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;