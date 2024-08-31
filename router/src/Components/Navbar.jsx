import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbarstyle.css';

 

function Navbar() {
  return (
    <>
      <div className='maindiv'>
        <div className='navbar'>
          
          <div>
            <p className='namediv'>TRAVEL</p>
          </div> 
          <div className='searchbar'>
            <div className='searchIcon'>
            <svg className='search' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="rgb(105, 101, 101)"></path></svg>
            </div>
            <div className='inputdiv'>
              <input className='inputval' placeholder='search your destination'></input>
            </div>
          </div>
          <div className='valdiv'>
          <NavLink 
            to='/' 
            className={({isActive})=>(isActive ? 'activelink' : 'values')} 
            id="val"
            >Home</NavLink>

            <NavLink 
            to='/destination'
            className={({isActive})=>(isActive ? 'activelink' : 'values')} 
            id="val"
            >Destination</NavLink>
            <NavLink to="/signup" className={({isActive})=>(isActive ? 'activelink' : 'values')} >SignUp</NavLink>
            <NavLink to='/login' className={({isActive})=>(isActive ? 'activelink' : 'values')} >Login</NavLink>
            <NavLink to='/about' className={({isActive})=>(isActive ? 'activelink' : 'values')} >About</NavLink>
            <NavLink to='/addcard' className={({isActive}) => (isActive ? 'activelink': 'values')}>AddCard</NavLink>
          </div>

        </div>
        </div>
    </>
  )
}
export default Navbar;
