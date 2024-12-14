import {  faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import {StoreContext} from '../Context/Context'
import axios from 'axios'


const Login = ({setLoginpop}) => {
    const {url,setToken} = useContext(StoreContext)
    const [curr, setcurr] = useState('Login')
    const[data, setData] = useState({
        name:"",
        email:"",
        password:"",
    })
    const handlerchang = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const isLogin = async (event) => {
        event.preventDefault();
        let newurl = url
        if (curr==="Login") {
            newurl += '/api/user/login'
        } else {
            newurl += '/api/user/register'
        }
        const respons = await axios.post(newurl,data)
      
        
        if (respons.data.success) {
            setToken(respons.data.message)
            localStorage.setItem("token",respons.data.message)
            setLoginpop(false)
        } else {
            alert(respons.data.message)
        }
    }

    return (
        <div className='absolute animate-[anime,0.3s]  z-[1] w-[100%] h-[100%] bg-[#00000090] grid'>
            <form onSubmit={isLogin} className='place-self-center  h-[65%] text-[#808080] bg-white flex flex-col gap-[25px]  py-[25px] px-[30px] rounded-lg text-xs w-[25vw,330px]' >
                <div className='flex justify-between items-center text-black text-xl '>
                    <h2 >{curr}</h2>
                <FontAwesomeIcon className='cursor-pointer w-3' onClick={()=> setLoginpop(false)} icon={faMultiply}/>
                </div>
                <div className='flex flex-col gap-5'>
                    {curr==='Login'?<></>:<input onChange={handlerchang} value={data.name}  className='border-2 border-black rounded-xl p-1 text-sm text-black ' type="text" name='name' placeholder='Enter Youer Name ' required />}
                   <input onChange={handlerchang} value={data.email}  className='border-2 border-black rounded-xl p-1 text-sm text-black ' name='email' type="email" placeholder='Enter Youer Email' required/>
                    <input onChange={handlerchang} value={data.password}  className='border-2 border-black rounded-xl p-1 text-sm text-black ' name='password' type="password" placeholder='Enter Youer password' required />
                </div>
                <button type='submit' className='bg-black w-[40%] text-white text-sm p-1 rounded-3xl cursor-pointer hover:scale-[1.1]'> {curr==='Sing Up'?'Creat A Account':'Login'}</button>
                <div className='font-normal text-black flex gap-x-[4px]'>
                    <input className='' type="checkbox" required />
                    <p className='font-bold'>By Condtion || My Terms And Condtion Privet Policy </p>
                </div>
                {curr==='Login'
                ?<p className='text-black font-mono'>Creat A New Account <span className='cursor-pointer' onClick={()=> setcurr("Sing Up")}>Click here</span></p>
                : <p className='text-black font-mono'>Already have A account <span className='cursor-pointer' onClick={()=> setcurr("Login")}>Login Here</span></p>
            }
                
               
            </form>
                   
        </div>
    )
}

export default Login