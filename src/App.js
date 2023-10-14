import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import BurjKhalifa from './pages/Burj-Khalifa';
import { useEffect } from 'react';
import PalmJumeirah from './pages/Palm-Jumeirah';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/burj-khalifa" replace />} />
      <Route path="/burj-khalifa" element={<BurjKhalifa />} />
      <Route path="/palm-jumeirah" element={<PalmJumeirah />} />
      <Route path="/deira-creekside" element={<PalmJumeirah />} />
    </Routes>
  );
}

export default App;
