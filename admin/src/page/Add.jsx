import React, {  useState } from 'react'
import axios from 'axios'
import './css/add.css'
import { toast } from 'react-toastify'



const Add = () => {
    const [image, setimage] = useState(false)
    const [data, setdata] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad",

    })

    
    const url= "http://localhost:4000";


    const handlerchang = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setdata(data=>({...data,[name]:value}))
    }


    const onform = async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)

        const respons = await axios.post(`${url}/api/add/food`,formData)
        if (respons.data.success) {
            setdata({
                name:"",
                description:"",
                price:"",
                category:"",
            })
            setimage(false)
            toast.success(respons.data.message)
        } else {
            toast.error(respons.data.message)
        }
    }

  return (
    <div id='list' className='w-[50%] ml-[max(5vw,25px)] mt-[50px] text-[16px] text-[#6d6d6d]'>
        <form id='from' className='gap-[20px] flex-col' onSubmit={onform} >
            <div className='flex flex-col border-2 border-gray-400 p-4'>
                <h1 className='text-2xl font-bold'>Upload Image</h1>
                <label htmlFor="image">
                <img className='w-[40px] h-[40px]' src={image?URL.createObjectURL(image):"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"} alt="Image" />
                </label>
                
                <input onChange={(e)=>setimage(e.target.files[0])} className='border-2 border-black rounded   p-[10px]' type="file" id='image'  required hidden />
            </div>
            <div className='flex flex-col border-2 border-gray-400 p-4'>
                <h1 className='text-2xl font-bold'>Product Name</h1>
                <input onChange={handlerchang} value={data.name} className='border-2 border-black rounded   p-[10px]' type="text" name="name" placeholder='Type Here'required />
            </div>
            <div className='flex flex-col border-2 border-gray-400 p-4'>
                <h1 className='text-2xl font-bold'>Product Description</h1>
                <textarea onChange={handlerchang} value={data.description} className='border-2 border-black rounded   p-[10px]' name="description" rows={3}placeholder='Type Here Description' required></textarea>
            </div>
            <div id='list1' className='flex gap-x-7 border-2 border-gray-400 p-4'>
                <div>
                    <h1 className='text-xl font-bold'>Product Category</h1>
                    <select onChange={handlerchang} className='border-2 border-black rounded  ' name="category" required>
                        <option value="Salad">Salad</option>
                        <option value="NON-VEG">VEG-THALI</option>
                        <option value="SWEET">SWEET</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="CHICKEN">CHICKEN</option>
                        <option value="BURGER">BURGER</option>
                        <option value="NODELS">NODELS</option>
                        <option value="PASTA">PASTA</option>
                        <option value="ROAL">ROAL</option>
                        <option value="CAKE">CAKE</option>
                    </select>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Product Price</h1>
                    <input onChange={handlerchang} value={data.price} className='border-2 border-black rounded   p-[10px]' type="Number" name='price' placeholder='$20' required />
                </div>
            </div>
            <button type="submit" className='border-none max-w-[120px] p-[10px] bg-black text-white rounded-lg'>ADD</button>
        </form>
    </div>
  )
}

export default Add