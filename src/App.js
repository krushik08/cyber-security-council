import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import BurjKhalifa from './pages/Floating-Bridge';
import { useEffect } from 'react';
import PalmJumeirah from './pages/Museum-Of-The-Future';
import DeiraCerrkside from './pages/Barakkah-Nuclear-Plant';
import AbuDhabiAirport from './pages/Abu-Dhabi-Airport';
import DubaiAirport from './pages/Dubai-Airport';
import FloatingBridge from './pages/Floating-Bridge';
import BarakkahNuclearPlant from './pages/Barakkah-Nuclear-Plant';
import MuseumOfTheFuture from './pages/Museum-Of-The-Future';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/burj-khalifa" replace />} />
      <Route path="/dubai-airport" element={<DubaiAirport />} />
      <Route path="/abu-Dhabi-airport" element={<AbuDhabiAirport />} />
      <Route path="/floating-bridge" element={<FloatingBridge />} />
      <Route
        path="/barakkah-nuclear-plant"
        element={<BarakkahNuclearPlant />}
      />
      <Route path="/museum-of-the-future" element={<MuseumOfTheFuture />} />
    </Routes>
  );
}

export default App;
