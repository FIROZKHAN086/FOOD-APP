import React, { useContext } from 'react'
import { StoreContext } from '../../Context/Context'
import { Link, useNavigate } from 'react-router-dom'
import './cart.css'

const Cart = () => {

  const { Cartitem, food_list, removecart,getTotal,url } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <>
    <div className= 'cart  mt-[100px] '>
      <div id='grid' className=' flex flex-col mx-8'>
        <div  className='grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-gray-500 text-[1vw,12px] '>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (Cartitem[item._id]) {
            return (
              <div>
                <div className='grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-black text-[1vw,12px] py-1 '>
                  <img className='w-[70px]' src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{Cartitem[item._id]}</p>
                  <p>${item.price * Cartitem[item._id]}</p>
                  <p onClick={()=>removecart(item._id)} className='cursor-pointer text-xm'>x</p>
                </div>
                <hr className="h-[1px] border-none bg-gray-600" />
              </div>
            )
          }
        })}
      </div>
    </div>
    <div id='fex' className='flex justify-between mx-9 mt-[80px] gap-[40px]'>
    <div className='flex-1 flex flex-col gap-4'>
        <h1>Cart Total</h1>
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
            <b>${getTotal()=== 0 ?0:getTotal() + 2}</b>
          </div>
        </div>
        {getTotal()===0?<Link to={"/"}><button className='border-none bg-red-400 text-white py-[12px] rounded cursor-pointer w-[max(15vw,200px)]'>Buy Now</button></Link>:<button onClick={()=>navigate('/Order')} className='border-none bg-red-400 text-white py-[12px] rounded cursor-pointer w-[max(15vw,200px)]'>PROCEED TO CHEKOUT</button>}
        
      </div>
      <div className='flex-1 '>
        <div>
          <p className='text-xl font-normal'>If you Have a promo code, Enter Here</p>
          <div id='promo' className='flex  justify-between items-center mt-[10px] bg-[#eaeaea]'>
            <input className='border-none outline-none bg-transparent pl-[10px]' type="text" placeholder='Promo Code' />
            <button className='w-[max(10vw,150px)] py-[5px] px-[12px] border-none text-white bg-black rounded'>Submit</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart