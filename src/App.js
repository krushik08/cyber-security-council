import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import BurjKhalifa from './pages/Burj-Khalifa';
import { useEffect } from 'react';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/burj-khalifa" replace />} />
      <Route path="/burj-khalifa" element={<BurjKhalifa />} />
    </Routes>
  );
}

export default App;
