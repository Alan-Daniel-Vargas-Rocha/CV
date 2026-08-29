import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './Footers';

console.log('🔍 [Layout.tsx] Iniciando Layout...');

const Layout = () => {
  console.log('🔄 [Layout.tsx] Renderizando Layout');
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;