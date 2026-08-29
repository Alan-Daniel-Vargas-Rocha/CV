import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data';

const Header = () => {
  return (
    <header className="text-center py-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl mb-8">
      <div className="flex flex-col items-center px-4">
        <img 
          src="./assets/Foto1.png" 
          alt={personalInfo.name}
          className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-xl object-cover mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-gray-300 mt-2">{personalInfo.title}</p>
        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
            <FaEnvelope /> {personalInfo.email}
          </a>
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
            <FaPhone /> {personalInfo.phone}
          </a>
          <a href={personalInfo.github} target="_blank" className="flex items-center gap-2 bg-gray-500/20 px-4 py-2 rounded-full">
            <FaGithub /> GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" className="flex items-center gap-2 bg-blue-700/20 px-4 py-2 rounded-full">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;