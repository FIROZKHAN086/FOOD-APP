import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import './css/list.css'

const List = () => {
  const url = "https://food-app-backend-3joc.onrender.com"
  const[list,setlist] = useState([])

  const fetchList = async () => {
    const respons = await axios.get(`${url}/api/list`);
    // console.log(respons.data);
    
    if (respons.data.success) {
      setlist(respons.data.message)
      
    } else {
      console.log("ERROR");
      
    }
    
  }

  const removeFood = async (foodId) => {
    const respons  = await axios.post(`${url}/api/remove`,{id:foodId})
    await fetchList();
    if (respons.data.success) {
      toast.success(respons.data.message)
    } else {
      toast.error("Error")
    }
  }

  useEffect(()=>{
fetchList();
  },[])

  return (
    <div id='list' className='flex flex-col m-2'>
     <div>
      <p className='font-semibold text-xl'>ALL List Item</p>

      <div id='same1' className='grid gap-[20px] grid-cols-[0.5fr,1.5fr,1fr,1fr,0.5fr] items-center text-black text-[1vw,12px] py-1'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item,index)=>{
          return (
            <div id='same' key={index}  className='grid gap-[20px] grid-cols-[0.5fr,1.5fr,1fr,1fr,0.5fr] items-center text-black text-[1vw,12px] py-1'> 
              <img src={`${url}/images/`+item.image} alt='image' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor-pointer'>X</p>
            </div>
          )
        })}
     </div>
    </div>
  )
}

export default List
