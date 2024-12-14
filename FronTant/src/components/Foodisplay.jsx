import React, { useContext } from 'react'
import { StoreContext } from '../Context/Context'
import Fooditem from './Fooditem'
import './Foodisplay.css'

const Foodisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
    food_list
  return (
    <div id='dis' className='mt-[30px] '>
        <h1 className='font-semibold text-[3vw] '>Top Food In Our Kitchen </h1>
        <div className='food-display-list '>
            {food_list.map((item,index) => {
                if(category==='all' || category===item.category){
                    return <Fooditem key={index} id={item._id} name={item.name} price={item.price} image={item.image} description={item.description}  /> 
                }
            })}
        </div>
    </div>
  )
}

export default Foodisplay