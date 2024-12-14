import React from 'react'
import {menu_list}from '../assets/assets'
import './ex.css'

const Explore = ({category , setCategory}) => {
  return (
    <div id='menu' className='flex flex-col mx-2 gap-3 w-full '>
        <h1 className='text-3xl font-bold font-sans underline'>Explore Menu</h1>
    <p className='font-extralight text-xl'>THis Is Our Most Selling Food In Days Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sed. </p>
    <div id='list' className=' flex justify-between  items-center text-center gap-[30px] overflow-x-scroll'>
        {menu_list.map((item, index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "all" :item.menu_name)}  key={index} className=' my-[20px] mx-[0px] w-screen'>
                    <img className={category===item.menu_name ? "border-4 border-red-500 p-[2px]  min-w-[120px] rounded-full transition-[0.2s] cursor-pointer" :' min-w-[120px] rounded-full transition-[0.2s] cursor-pointer'} src={item.menu_image} alt="img" />
                    <h1 className='font-bold'>{item.menu_name}</h1>
                </div>
            )
        })}
    </div>
    <hr className='bg-[#e2e2e2] w-[100%] border-none my-[10px] h-1' />
    </div>
  )
}

export default Explore;