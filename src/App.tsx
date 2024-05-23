import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './app/Home/Home';
import Wellness from './app/Wellness/Wellness';
import BoutiqueStay from './app/BoutiqueStay/BoutiqueStay';
import AyurvedaRetreat from './app/AyurvedaRetreat/AyurvedaRetreat';
import AyurvedaMassages from './app/AyurvedaMassages/AyurvedaMassages';


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
        </Routes>
      </Router>
    </div>
  )
}

export default App
