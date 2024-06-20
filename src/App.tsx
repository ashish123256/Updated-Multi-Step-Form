
import  { Suspense, lazy, memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load the components
const Desktop1 = lazy(() => import('./pages/Desktop1'));
const Desktop2 = lazy(() => import('./pages/Desktop2'));
const Desktop3 = lazy(() => import('./pages/Desktop3'));

const App = memo(()=>  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Desktop1 /></Suspense>} />
        <Route path="/desktop2" element={<Suspense fallback={<div>Loading...</div>}><Desktop2 /></Suspense>} />
        <Route path="/desktop3" element={<Suspense fallback={<div>Loading...</div>}><Desktop3 /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
})

export default App;
