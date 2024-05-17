import './Navbar.css';
import heiwaMiniLogo from '../Images/HeiwaNavbarLogo.svg';
import { NavLink } from 'react-router-dom';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';




export default function Navbar() {
  return (
    <div className="navbar">
      <div className='heiwaLogoContainer'>
        <img src={heiwaMiniLogo} alt='heiwaLogo'/>
      </div>

      <div className='navbarContents'>
        <NavLink to='/'>
          <span className='navbarContent'>HOME</span>
        </NavLink>

        <NavLink to='/about'>
          <span className='navbarContent'>ABOUT US</span>
        </NavLink>

        <NavbarDropdown/>

        <button className='navbarContactButton'>
          CONTACT US
        </button>
      </div>
    </div>
  )
}
