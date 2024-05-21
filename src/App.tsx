import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './app/Home/Home';
import Wellness from './app/Wellness/Wellness';
import BoutiqueStay from './app/BoutiqueStay/BoutiqueStay';


function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/wellness-packages' element={<Wellness/>}/>
          <Route path='/boutique-stay-retreat' element={<BoutiqueStay/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
