import { useState } from 'react';
import About from '../components/common/home/About';
import Skills from '../components/common/home/Skills';
import Projects from '../components/common/projects/Projects';
import Education from '../components/common/home/Education';
import Certificates from '../components/common/home/Certificates';

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  return (
    <>
      <About />
      <Education />
      <Certificates /> {/* ← NUEVA SECCIÓN */}
      <Skills onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <Projects filter={activeFilter} />
    </>
  );
};

export default HomePage;