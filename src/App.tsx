import { RouterProvider } from 'react-router-dom';
import { router } from './router';

console.log('🔍 [App.tsx] Iniciando App...');
console.log('📋 [App.tsx] Router:', router);

function App() {
  console.log('🔄 [App.tsx] Renderizando RouterProvider');
  return <RouterProvider router={router} />;
}

export default App;