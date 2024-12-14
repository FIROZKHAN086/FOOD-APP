import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faCartShopping, faSearch, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/Context';
import './css/nav.css'
import './ex.css'


const Navbar = ({ setLoginpop }) => {
  const [manu, setmanu] = useState("HOME")
  const[toggel,setToggel] = useState(false)
  const { getTotal, token, setToken } = useContext(StoreContext)

  const navigate = useNavigate()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const Logout = ()=>{
    localStorage.removeItem('token');
    setToken("")
    navigate("/")
  }
  return (
    <nav className='w-screen nav flex items-center justify-around  bg-black text-white '>
      <img className=' hover:scale-[1.3] w-[60px] h-[60px] rounded-full  my-3' src="https://img.freepik.com/premium-vector/logo-food-catering-that-is-called-food-catering_540027-2.jpg?semt=ais_hybrid" alt="LOGO" />

      <ul className= {toggel ?"absolute md:hidden  top-[75px] right-0 w-[40%] h-screen z-50 flex flex-col items-center py-[50px] gap-5 bg-gray-700 ":' flex items-center  gap-x-6 max-md:hidden cursor-pointer'}>
        <Link to={'/'}>  <li className={manu === 'HOME' ? "text-slate-400 border-b-2 border-white" : "hover:text-slate-400"}>HOME</li></Link>
        <a href="#menu"> <li className={manu === 'MANU' ? "text-slate-400 border-b-2 border-white" : "hover:text-slate-400"}>MANU</li></a>
       <a href="#About"> <li  className={manu === 'MOBILE APP' ? "text-slate-400 border-b-2 hover:border-white" : "hover:text-slate-400"}>ABOUT US</li></a>
        <a href="#Contact"> <li  className={manu === 'CONTACT US' ? "text-slate-400 border-b-2 border-white" : "hover:text-slate-400"} >CONTACT US</li></a>
      </ul>
      <div className='flex  items-center gap-x-4'>
        <FontAwesomeIcon icon={faSearch} className='hover:scale-[1.5]' />
        <Link to={'/Cart'}><FontAwesomeIcon icon={faCartShopping} className='hover:scale-[1.5]' /></Link>
        {!token ? <button onClick={() => setLoginpop(true)} className='bg-yellow-100 text-black rounded px-2 py-1 hover:bg-gray-400'>Sing in</button> :
          <div id='drop' className=' relative'>
            <FontAwesomeIcon icon={faUserAlt}/>
            <ul id='drop1' >
              <li><FontAwesomeIcon className='hover:text-black scale-[1.1]' icon={faBagShopping}/></li>
              <hr />
              <li><FontAwesomeIcon onClick={Logout} className='hover:text-black scale-[1.1]' icon={faSignOutAlt}/></li>
            </ul>
          </div>}

      <FontAwesomeIcon onClick={()=>setToggel(!toggel)} icon={faBars} className='hidden cursor-pointer  max-md:block' />
      </div>
    </nav>
  )
}

export default Navbar