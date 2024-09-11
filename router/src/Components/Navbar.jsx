import React from 'react'; // Ensure useState is imported
import { NavLink, useNavigate } from 'react-router-dom';
import './navbarstyle.css';

function Navbar() {
  const navigate = useNavigate();

  const handleOnClick1 = () => {
    navigate('/Indian');
  };

  const handleOnClick2 = () => {
    navigate('/International');
  };

  const handleOnClick3=()=>{
    navigate('/IndiaCity');
  }

  return (
    <>
      <div className='maindiv'>
        <div className='navbar'>
          <div>
            <p className='namediv'>TRAVEL</p>
          </div>
          
          <div className='valdiv'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'activelink' : 'values')}
              id="val"
            >Home</NavLink>

            <div className='dropdown'>
              <NavLink to='/Destination' className={({ isActive }) => (isActive ? 'activelink' : 'values')} id="val">Destination</NavLink>
              <div className='dropdown-content'>
                <NavLink to='/Indian' className='dropdown-link' onClick={handleOnClick1}>Indian Tour</NavLink>
                <NavLink to='/International' className='dropdown-link' onClick={handleOnClick2}>International Tour</NavLink>
              </div>
              <div className='subdropdown-content' id='subval'>
                    <NavLink className='dropdown-link1' onClick={handleOnClick3} to='/IndiaCity'>Mumbai</NavLink>
                    <NavLink className='dropdown-link1' onClick={handleOnClick3} to='/IndiaCity'>Delhi</NavLink>
              </div>
            </div>
            
            <NavLink to='/login' className={({ isActive }) => (isActive ? 'activelink' : 'values')}>Login</NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'activelink' : 'values')}>About</NavLink>
          </div>
          <NavLink to='/addcard' className={({ isActive }) => (isActive ? '' : '')}>
            <div id='addtocarddiv'>
            <svg width="70" height="70" className='addtocardlogo' stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor"> <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="#a11775" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="#ffffff" stroke-width="0.9" filter="url(#shadow)"></path> <path d="M9.99219 11H11.9922M13.9922 11H11.9922M11.9922 11V9M11.9922 11V13" stroke="#a11775" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="#ffffff"></path> <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="#a11775" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="#ffffff"></path> <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="#a11775" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="#ffffff"></path> <filter id="shadow"><feDropShadow id="shadowValue" stdDeviation="0.6" dx="0.4" dy="-0.1" flood-color="#a24996"></feDropShadow></filter></svg>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
