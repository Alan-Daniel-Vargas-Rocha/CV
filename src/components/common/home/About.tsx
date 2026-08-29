import { personalInfo } from '../../../data';

const About = () => {
  return (
    <section className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-400 text-center">
        Sobre Mí
      </h2>
      <p className="text-gray-300 leading-relaxed text-lg text-center max-w-3xl mx-auto">
        {personalInfo.description}
      </p>
      
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {personalInfo.stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all hover:scale-105 hover:shadow-lg"
          >
            <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;