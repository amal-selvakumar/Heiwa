import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './app/Home/Home';
import Wellness from './app/Wellness/Wellness';
import BoutiqueStay from './app/BoutiqueStay/BoutiqueStay';
import AyurvedaRetreat from './app/Ayurveda/AyurvedaRetreat/AyurvedaRetreat';
import AyurvedaMassages from './app/Ayurveda/AyurvedaMassages/AyurvedaMassages';
import AyurvedaPersonalized from './app/Ayurveda/AyurvedaPersonalizedTreatments/AyurvedaPersonalized';
import AyurvedaBeauty from './app/Ayurveda/AyurvedaBeauty/AyurvedaBeauty';
import AyurvedaWeightManagement from './app/Ayurveda/AyurvedaWeightManagement/AyurvedaWeightManagement';
import AyurvedaConsultation from './app/Ayurveda/AyurvedaConsultation/AyurvedaConsultation';
import Gynecology from './app/Ayurveda/Gynecology/Gynecology';
import Kalari from './app/Ayurveda/Kalari/Kalari';
import WellnessRetreat from './app/WellnessRetreat/WellnessRetreat';
import RelaxRetreat from './app/RelaxRetreat/RelaxRetreat';
import ModernBeautyRetreat from './app/ModernBeautyRetreat/ModernBeautyRetreat';
import HolisticWellness from './app/HolisticWomenWellness/HolisticWellness';
import HormonalRetreat from './app/HormonalRetreat/HormonalRetreat';
import BurnoutManagement from './app/BurnoutManagement/BurnoutManagement';


function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/wellness-packages' element={<Wellness/>}/>
          <Route path='/boutique-stay-retreat' element={<BoutiqueStay/>}/>
          <Route path='/ayurveda-retreat' element={<AyurvedaRetreat/>}/>
          <Route path='/ayurveda-massages' element={<AyurvedaMassages/>}/>
          <Route path='/ayurveda-personalized-treatments' element={<AyurvedaPersonalized/>}/>
          <Route path='/ayurveda-beauty' element={<AyurvedaBeauty/>}/>
          <Route path='/ayurveda-weight-management' element={<AyurvedaWeightManagement/>}/>
          <Route path='/ayurveda-pre-consultation' element={<AyurvedaConsultation/>}/>
          <Route path='/gynecological-consultation' element={<Gynecology/>}/>
          <Route path='/kalari-treatment' element={<Kalari/>}/>
          <Route path='/wellness-retreat' element={<WellnessRetreat/>}/>
          <Route path='relax-retreat' element={<RelaxRetreat/>}/>
          <Route path='/modern-retreat' element={<ModernBeautyRetreat/>}/>
          <Route path='/holistic-retreat' element={<HolisticWellness/>}/>
          <Route path='/hormonal-retreat' element={<HormonalRetreat/>}/>
          <Route path='burnout-retreat' element={<BurnoutManagement/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
