import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { personalInfo } from '../../data';

const Footer = () => {
  return (
    <footer className="text-center py-8 border-t border-white/10">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a 
          href="https://drive.google.com/file/d/1XhpXbjX71n9IJSFd__ksY24qmMDELHVX/view?usp=sharing" 
          download 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition text-sm"
        >
          <FaFilePdf /> Ver CV
        </a>
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
      <p className="text-gray-400 text-sm">© 2026 {personalInfo.name}</p>
    </footer>
  );
};

export default Footer;