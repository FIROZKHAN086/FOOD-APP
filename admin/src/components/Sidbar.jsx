import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const Sidbar = () => {
  return (
    <div id='sid' className='w-[18%] min-h-[100vh] border-t-0 border-[1.5px] border-[#a9a9a9] '>
        <div id='side' className='flex flex-col pt-[50px] gap-[20px] pl-[20%]'>
            <NavLink to={"/add"} className='flex items-center gap-[12px] border-2 border-[#9a9a9a] border-r-0 py-[8px] px-[10px] rounded-[3px,0px,0px,3px] cursor-pointer'>
                <FontAwesomeIcon icon={faPlus}/>
                <p>Add Item</p>
            </NavLink>
            <NavLink to={"/list"} className='flex items-center gap-[12px] border-2 border-[#9a9a9a] border-r-0 py-[8px] px-[10px] rounded-[3px,0px,0px,3px] cursor-pointer'>
                <FontAwesomeIcon icon={faCheck}/>
                <p>List</p>
            </NavLink>
            <NavLink to={"/order"} className='flex items-center gap-[12px] border-2 border-[#9a9a9a] border-r-0 py-[8px] px-[10px] rounded-[3px,0px,0px,3px] cursor-pointer'>
            <FontAwesomeIcon icon={faCheck}/>
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidbar