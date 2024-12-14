import React from 'react'
import './Heder.css'
const Header = () => {
  return (
    <div id='head' className= 'text-white mx-auto  w-[90%]   '>
        <div id='hedd' className='flex flex-col  max-w-[100%] gap-[1vw] left-[1.6vw]  absolute bottom-[20px]     items-start'>
            <h1 className='font-medium font-serif text-[max(3.5vw,22px)]'>Order Your Favourite  Food Here</h1>
            <p className='font-medium text-[1vw]'> Chouse Your favourite Foode here And order some New  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis non nulla esse quasi quae doloribus incidunt voluptatum autem tempora minus!</p>
            <button className='border-none font-medium py-[1vw] px-[2.3vw] rounded-2xl text-[#747474] bg-white'>View Manu</button>
        </div>
    </div>
  )
}

export default Header