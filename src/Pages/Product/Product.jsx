import React from 'react'
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'
import ProductCP from '../../Components/Product/ProductCP'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams();
  return (
    <div>
        <Navbar/>
        <ProductCP id={id}/>
        <Footer/>
    </div>
  )
}

export default Product