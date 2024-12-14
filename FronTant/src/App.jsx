import React, { useState } from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer';
import Login from './components/Login';


const App = () => {
  const [Loginpop, setLoginpop] = useState(false)
  return (
    
    <>
    {Loginpop?<Login setLoginpop={setLoginpop}/>:<></>}
<Navbar setLoginpop={setLoginpop} />
    <div className='w-[90%] mx-2 '>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Cart' element = {<Cart/>}/>
  <Route path='/Order' element = {<PlaceOrder/>}/>

</Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App