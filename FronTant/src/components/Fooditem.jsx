
import { faCartShopping, faIndianRupee, faMinus, faPlus, faRupee,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React ,{ useContext} from 'react'
import { StoreContext } from '../Context/Context'

const Fooditem = ({id,name, price, description, image,}) => {
    const { Cartitem,addtocart,removecart,url} = useContext(StoreContext);
    
  return (
    <div className='w-[100%] card-container  m-auto rounded border-2 border-black hover:scale-[1.05] transition-[0.3s] '>
        <div className=' h-[270px] card relative rounded-t-2xl  rounded-l-2xl rounded-r-none rounded-b-none'>
            <img className='w-[100%] h-[90%] '  src={url+'/images/'+image} alt="Image" />
            {Cartitem[id]
            ?<div className='absolute bottem-[15px] right-[15px] flex items-center gap-[10px] rounded-[50%]  '>
            <FontAwesomeIcon  className='bg-red-500 text-white p-[3px] rounded-[50%]' icon={faMinus} onClick={()=>removecart(id)}/>
            <p>{Cartitem[id]}</p>
            <FontAwesomeIcon className='bg-green-500 text-white p-[3px] rounded-[50%]' icon={faPlus} onClick={()=>addtocart(id)}/>
        </div>
            :<FontAwesomeIcon className=' absolute bg-black text-white rounded-[50%] my-1 p-[3px] bottem-[15px] right-[15px] cursor-pointer '  icon={faCartShopping} onClick={()=> addtocart(id)} /> 
            }
        </div>
        <div className='p-[20px]'>
            <p className='font-bold font-sans text-xl food-title'>{name}</p>
        
        </div >
        <p className='font-sans pl-3'>{description}</p>
        <p className='pl-5 my-3 cursor-pointer food-price'>$:{price}</p>
    </div>
  )
}

export default Fooditem