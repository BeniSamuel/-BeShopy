import React from 'react'
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'
import CartTable from '../../Components/Cart/CartTable'

const Cart = () => {
  return (
    <div>
        <Navbar/>
        <CartTable/>
        <Footer/>
    </div>
  )
}

export default Cart