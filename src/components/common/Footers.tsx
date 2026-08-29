import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data';

const Footer = () => {
  return (
    <footer className="text-center py-8 border-t border-white/10">
      <div className="flex justify-center gap-6 mb-4">
        <a href={personalInfo.github} target="_blank" className="text-gray-400 hover:text-blue-400 transition text-2xl">
          <FaGithub />
        </a>
        <a href={personalInfo.linkedin} target="_blank" className="text-gray-400 hover:text-blue-400 transition text-2xl">
          <FaLinkedin />
        </a>
        <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-400 transition text-2xl">
          <FaEnvelope />
        </a>
      </div>
      <p className="text-gray-400 text-sm">© 2024 {personalInfo.name}</p>
    </footer>
  );
};

export default Footer;