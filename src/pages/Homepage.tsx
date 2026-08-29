import { useState } from 'react';
import About from '../components/common/home/About';
import Skills from '../components/common/home/Skills';
import Projects from '../components/common/projects/Projects';
import Education from '../components/common/home/Education';

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  return (
    <>
      <About />
      <Education />
      <Skills onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <Projects filter={activeFilter} />
    </>
  );
};

export default HomePage;