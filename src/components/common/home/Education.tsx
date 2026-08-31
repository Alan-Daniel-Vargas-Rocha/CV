import { FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
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
            
            {/* === ENLACES A CERTIFICADOS === */}
            <div className="flex flex-wrap gap-3 mt-3">
              {/* Kardex */}
              {edu.Kardex && (
                <a 
                  href={edu.Kardex} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-3 py-1.5 rounded-full text-sm transition"
                >
                  <FaFileAlt /> Ver Kardex <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              
              {/* Certificado */}
              {edu.Certificado && (
                <a 
                  href={edu.Certificado} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 px-3 py-1.5 rounded-full text-sm transition"
                >
                  <FaFileAlt /> Ver Certificado <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
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