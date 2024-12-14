import React from 'react'
import Navbar from './components/Navbar'
import Sidbar from './components/Sidbar'
import { Route, Routes } from 'react-router-dom'
import Add from './page/Add'
import List from './page/List'
import Order from './page/order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
   
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app flex">
        <Sidbar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/order' element={<Order/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
