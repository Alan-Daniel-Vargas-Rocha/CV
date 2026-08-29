import { projects, skills } from '../../../data'; // ← Cambia de '../data' a '../../../data'

interface SkillsProps {
  onFilterChange: (tech: string) => void;
  activeFilter: string;
}

const Skills = ({ onFilterChange, activeFilter }: SkillsProps) => {
  return (
    <section className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">
        Tecnologías
      </h2>
      <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
        {skills.map((skill) => {
          const count = projects.filter(p => 
            p.tech.toLowerCase().includes(skill.name.toLowerCase())
          ).length;
          
          return (
            <button
              key={skill.name}
              onClick={() => onFilterChange(skill.name)}
              className={`bg-white/10 rounded-xl p-4 w-28 md:w-32 text-center transition-all duration-300 hover:scale-110 hover:bg-white/20 ${
                activeFilter === skill.name ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
            >
              <div className="text-4xl md:text-5xl mx-auto text-gray-300">
                <span className="text-2xl">🔹</span>
              </div>
              <p className="mt-2 font-medium text-sm md:text-base">{skill.name}</p>
              <p className="text-xs text-gray-400 mt-1">
                {count} proyectos
              </p>
            </button>
          );
        })}
        <button
          onClick={() => onFilterChange('Todos')}
          className={`bg-white/10 rounded-xl p-4 w-28 md:w-32 text-center transition-all duration-300 hover:scale-110 hover:bg-white/20 ${
            activeFilter === 'Todos' ? 'ring-2 ring-blue-500 shadow-lg' : ''
          }`}
        >
          <div className="text-4xl md:text-5xl mx-auto text-gray-300">
            <span className="text-2xl">📂</span>
          </div>
          <p className="mt-2 font-medium text-sm md:text-base">Todos</p>
          <p className="text-xs text-gray-400 mt-1">
            {projects.length} proyectos
          </p>
        </button>
      </div>
    </section>
  );
};

export default Skills;