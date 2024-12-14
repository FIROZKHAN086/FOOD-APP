import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/Context'
import './Place.css'

const PlaceOrder = () => {

  const {getTotal} = useContext(StoreContext)
  
  return (
    <form className='flex items-center overflow-x-hidden justify-between gap-[50px] w-[90%] mt-[100px]'>
      <div id='form' className='w-screen  px-9 '>
      <h2 className='text-[30px] font-semibold mb-[50px]'>Delivery Information</h2>
      <div className='flex gap-[10px]'>
        <input className='mb-[15px] w-[100%] p-[10px] rounded-md border-[1px] border-[#c5c5c5] outline-red-500' type="text" placeholder='First name' />
        <input className='mb-[15px] w-[100%] p-[10px] rounded-md border-[1px] border-[#c5c5c5] outline-red-500' type="text" placeholder='Last name' />
      </div>
      <input className='mb-[15px] w-[100%] p-[10px] rounded-md border-[1px] border-[#c5c5c5] outline-red-500' type="email" placeholder='Enter Email' />
      <input className='mb-[15px] w-[100%] p-[10px] rounded-md border-[1px] border-[#c5c5c5] outline-red-500' type="text" placeholder='Enter Street' />
      <div className='flex gap-[10px]'>
        <input className='mb-[15px] w-[100%] p-[10px] rounded-md border-[1px] border-[#c5c5c5] outline-red-500' type="text" placeholder='City' />
        <input className='mb-[15px] w-[100%] p-[10px] rounded-md border-[1px] border-[#c5c5c5] outline-red-500' type="text" placeholder='State' />
      </div>
      <div className='flex gap-[10px]'>
        <input className='mb-[15px] w-[100%] p-[10px] rounded-md border-[1px] border-[#c5c5c5] outline-red-500' type="text" placeholder='Zip Code' />
        <input className='mb-[15px] w-[100%] p-[10px] rounded-md border-[1px] border-[#c5c5c5] outline-red-500' type="text" placeholder='Country' />
      </div>
      <input className='mb-[15px] w-[100%] p-[10px] rounded-md border-[1px] border-[#c5c5c5] outline-red-500' type="text" placeholder='Enter Phone Number' />
      </div>
      <div  className=' w-screen px-10 '>
      <div id='fex' className='flex-1 flex flex-col gap-4'>
        <h1 className='text-2xl'>Cart Total</h1>
        <div>
          <div className='flex justify-between text-[#555]'>
            <p>Subtotal</p>
            <p>${getTotal()}</p>
          </div>
          <hr className='my-[10px]' />
          <div className='flex justify-between text-[#555]'>
            <p>Delivery Fee</p>
            <p>${getTotal()===0?0:2}</p>
          </div>
          <hr className='my-[10px]' />
          <div className='flex justify-between text-[#555]'>
            <b>Total</b>
            <b>${getTotal()===0?0:getTotal() + 2}</b>
          </div>
        </div>
        {getTotal()===0?<Link to={"/"}><button className='border-none bg-red-400 text-white py-[12px] rounded cursor-pointer w-[max(15vw,200px)]'>Buy Now</button></Link>:<button onClick={()=>navigate('/Order')} className='border-none bg-red-400 text-white py-[12px] rounded cursor-pointer w-[max(15vw,200px)]'>PROCEED TO CHEKOUT</button>}
      </div>
      </div>
    </form>
  )
}

export default PlaceOrder