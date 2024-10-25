import React from 'react'
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'
import ProductCP from '../../Components/Product/ProductCP'
import { useParams } from 'react-router-dom'
import ProductCu from '../../Components/Product/ProductCu'
import OurProduct from '../../Components/Home/OurProduct/OurProduct'

const Product = () => {
  const { id } = useParams();
  return (
    <div>
        <Navbar/>
        <ProductCP id={id}/>
        <OurProduct title="Similar Products"/>
        <Footer/>
    </div>
  )
}

export default Product