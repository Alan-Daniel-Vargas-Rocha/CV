import { projects } from '../../../data';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  filter?: string;
}

const Projects = ({ filter = 'Todos' }: ProjectsProps) => {
  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter(p => {
        const techList = p.tech.split(',').map(t => t.trim().toLowerCase());
        return techList.some(t => t === filter.toLowerCase());
      });

  return (
    <section className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-green-400 text-center">
        Proyectos {filter !== 'Todos' && `- ${filter}`}
      </h2>
      
      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-400 mt-8">
          No hay proyectos en {filter}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;