import { createHashRouter } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/Homepage';
import ProjectDetail from './pages/ProjectDetail';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'project/:id', element: <ProjectDetail /> },
    ],
  },
]);