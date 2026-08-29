import { Link } from 'react-router-dom';
import type { Project } from '../../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/project/${project.id}`} className="block">
      <div className="bg-white/10 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/1a1a2e/ffffff?text=Sin+imagen';
            }}
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <span className="text-white text-sm font-medium bg-blue-500/80 px-4 py-2 rounded-lg">
              Ver detalles →
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center">{project.title}</h3>
          <p className="text-gray-400 text-sm text-center mt-1 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-1 mt-2">
            {project.tech.split(',').map((t, i) => (
              <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                {t.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;