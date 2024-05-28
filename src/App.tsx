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
        </Routes>
      </Router>
    </div>
  )
}

export default App
