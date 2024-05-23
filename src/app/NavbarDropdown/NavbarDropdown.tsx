import { useState } from 'react';
import './NavbarDropdown.css';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import dropdownData from './DropdownData.json';
import { NavLink } from 'react-router-dom';

export default function NavbarDropdown() {
  const [showDropdown,setShowDropdown]=useState(false);

  const handleShowDropdown=()=>{
    setShowDropdown(!showDropdown);
  }
  
  return (
    <>
     <div className='navbarDropdown'>
      <span>OUR SERVICES</span>
      <div className='dropdownIconDiv'>
        {showDropdown ? (<FaAngleUp className='dropdownIcon' onClick={handleShowDropdown}/>):(<FaAngleDown className='dropdownIcon' onClick={handleShowDropdown}/>)}
      </div>
     </div>

     {showDropdown ? (
      <div className='dropdown'>
        {dropdownData.map((data)=>(
          <NavLink to={data.path}>
          <div className='dropdownItem'>
              <span>{data.value}</span>
          </div>
          </NavLink>
        ))}
      </div>
     ):null}
    </>
    
  )
}
