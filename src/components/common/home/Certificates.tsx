import { certificates } from '../../../data';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  return (
    <section className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
        Certificados
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white/10 rounded-xl p-4 w-64 text-center hover:scale-105 transition-all">
            <FaCertificate className="text-4xl text-yellow-400 mx-auto mb-2" />
            <h3 className="font-semibold text-white">{cert.name}</h3>
            <p className="text-gray-400 text-sm">{cert.issuer}</p>
            <p className="text-gray-500 text-xs">{cert.date}</p>
            {cert.url && (
              <a 
                href={cert.url} 
                target="_blank" 
                className="text-blue-400 hover:text-blue-300 transition flex items-center justify-center gap-1 mt-2 text-sm"
              >
                Ver certificado <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;