import { Navigate, Route, Routes } from 'react-router-dom';
import AbuDhabiAirport from './pages/Abu-Dhabi-Airport';
import BarakkahNuclearPlant from './pages/Barakkah-Nuclear-Plant';
import DubaiAirport from './pages/Dubai-Airport';
import FloatingBridge from './pages/Floating-Bridge';
import MuseumOfTheFuture from './pages/Museum-Of-The-Future';
import BurkKhalifa from './pages/Burk-Khalifa';
import PortOfFujairah from './pages/Port-Of-Fujairah';
import Stadium from './pages/Stadium';
import ADNOCOilAndGas from './pages/ADNOC-Oil-And-Gas';
import EmiratesGlobalAluminum from './pages/EmiratesGlobalAluminum';
import AutomatedFactoryLineA from './pages/Automated-Factory-Line-A';
import AutomatedFactoryLineB from './pages/Automated-Factory-Line-B';
import Salik from './pages/Salik';
import ClevelandHospital from './pages/Cleveland-Hospital';
import AgricultureTechPark from './pages/Agriculture Tech Park';
import SolarPark from './pages/Solar-Park';
import SmartWarehouse from './pages/Smart-Warehouse';
import AmusementPark from './pages/Amusement-Park';
import DubaiMall from './pages/Dubai-Mall';
import DIFC from './pages/DIFC';
import DuDataCenter from './pages/Du-Data-Center';
import SmartPoliceStation from './pages/Smart-Police-Station';
import SpaceCenter from './pages/space-center';
import PalmJumeriah from './pages/Palm-Jumeriah';
import DubaiMetro from './pages/DubaiMetro';
import DubaiElectricityAndWaterAuthority from './pages/Dubai-Electricity-And-Water-Authority';
import JebelAliSewageTreatmentPlant from './pages/Jebel-Ali-Sewage-Treatment-Plant';
import HospitalityIndustry from './pages/Hospitality-Industry';
import SmartZoo from './pages/Smart-Zoo';
import SharjahMuseum from './pages/Sharjah-Museum';
import GreenEnergyPark from './pages/Green-energy-park';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/dubai-airport" replace />} />
      <Route path="/dubai-airport" element={<DubaiAirport />} />
      <Route path="/abu-dhabi-airport" element={<AbuDhabiAirport />} />
      <Route path="/floating-bridge" element={<FloatingBridge />} />
      <Route
        path="/barakkah-nuclear-plant"
        element={<BarakkahNuclearPlant />}
      />
      <Route path="/museum-of-the-future" element={<MuseumOfTheFuture />} />
      <Route path="/burk-khalifa" element={<BurkKhalifa />} />
      <Route
        path="/dubai-electricity-and-water-authority"
        element={<DubaiElectricityAndWaterAuthority />}
      />
      <Route path="/port-of-fujairah" element={<PortOfFujairah />} />
      <Route path="/port-of-fujairah-2" element={<PortOfFujairah />} />
      <Route
        path="/jebel-ali-sewage-treatment-plant"
        element={<JebelAliSewageTreatmentPlant />}
      />
      <Route path="/stadium" element={<Stadium />} />
      <Route path="/ADNOC-oil-and-gas" element={<ADNOCOilAndGas />} />
      <Route
        path="/emirates-global-aluminum"
        element={<EmiratesGlobalAluminum />}
      />
      <Route
        path="/automated-factory-line-a"
        element={<AutomatedFactoryLineA />}
      />
      <Route
        path="/automated-factory-line-b"
        element={<AutomatedFactoryLineB />}
      />
      <Route path="/salik" element={<Salik />} />
      <Route path="/cleveland-hospital" element={<ClevelandHospital />} />
      <Route path="/agriculture-tech-park" element={<AgricultureTechPark />} />
      <Route path="/solar-park" element={<SolarPark />} />
      <Route path="/smart-warehouse" element={<SmartWarehouse />} />
      <Route path="/amusement-park" element={<AmusementPark />} />
      <Route path="/dubai-mall" element={<DubaiMall />} />
      <Route path="/difc" element={<DIFC />} />
      <Route path="/green-energy-park" element={<GreenEnergyPark />} />
      <Route path="/du-data-center" element={<DuDataCenter />} />
      <Route path="/smart-police-station" element={<SmartPoliceStation />} />
      <Route path="/smart-zoo" element={<SmartZoo />} />
      <Route path="/space-center" element={<SpaceCenter />} />
      <Route path="/sharjah-museum" element={<SharjahMuseum />} />
      <Route path="/palm-jumeriah" element={<PalmJumeriah />} />
      <Route path="/dubai-metro" element={<DubaiMetro />} />
      <Route path="/hospitality-industry" element={<HospitalityIndustry />} />
    </Routes>
  );
}

export default App;
