import { personalInfo } from '../../../data';

const Education = () => {
  return (
    <section className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">
        Educación
      </h2>
      <div className="space-y-6">
        {personalInfo.education?.map((edu, index) => (
          <div key={index} className="bg-white/10 rounded-xl p-4">
            <h3 className="text-xl font-semibold text-blue-300">{edu.institution}</h3>
            <p className="text-gray-300">{edu.degree}</p>
            <p className="text-gray-400 text-sm">{edu.period}</p>
          </div>
        ))}
      </div>
      
      {/* Idiomas */}
      {personalInfo.languages && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Idiomas</h3>
          <div className="flex flex-wrap gap-4">
            {personalInfo.languages.map((lang, index) => (
              <span key={index} className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                {lang.name}: {lang.level}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;