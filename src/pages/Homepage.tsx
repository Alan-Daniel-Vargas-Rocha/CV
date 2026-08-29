import { useState } from 'react';
import About from '../components/common/home/About';
import Skills from '../components/common/home/Skills';
import Projects from '../components/common/projects/Projects';

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  return (
    <>
      <About />
      <Skills onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <Projects filter={activeFilter} />
    </>
  );
};

export default HomePage;