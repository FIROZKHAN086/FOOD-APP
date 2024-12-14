import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [Cartitem, setCartitem] = useState({})
    const [token,setToken] =useState("")
    const[food_list,setfoodList] = useState([])

   const url = "http://localhost:4000"

    const addtocart = async (itemId) => {
        if (!Cartitem[itemId]) {
            setCartitem((prev) => ({...prev, [itemId]: 1 }))
        } else {
            setCartitem((prev) => ({...prev, [itemId]:prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }

    }

    const removecart = async (itemId) => {
        setCartitem((prev) => ({ ...prev, [itemId]:prev[itemId] - 1 }))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
            const loadcartdata = async (token) => {
                const respons = await axios.post(url+ "/api/cart/get" ,{},{headers:{token}});
                setCartitem(respons.data.cartData);
            }


        const fetchFood = async () => {
            const respons = await axios.get(url+"/api/list")
            setfoodList(respons.data.message)
        }

    const getTotal = ()=>{
        let totalAmount = 0;
        for (const item in Cartitem) {
            if (Cartitem[item] > 0) {
                let iteminfo = food_list.find((product)=>product._id === item);
                totalAmount += iteminfo.price*Cartitem[item];   
            }
            }
            return totalAmount;
        }
        
        useEffect(()=>{
            async function loadData() {
                await fetchFood();
                if (localStorage.getItem("token")) {
                    setToken(localStorage.getItem("token"));
                   await loadcartdata(localStorage.getItem("token"))
                }
            }
            loadData()
        })
       

    const ContextValu = {
        food_list,
        Cartitem,
        setCartitem,
        addtocart,
        removecart,
        getTotal,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={ContextValu} >
            {props.children}
        </StoreContext.Provider>
    )


}
export default StoreContextProvider;