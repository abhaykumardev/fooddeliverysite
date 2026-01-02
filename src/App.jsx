import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './component/Footer/Footer'
import Loginpopup from './component/Loginpopup/Loginpopup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Placeorder/>}/>
       </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App
