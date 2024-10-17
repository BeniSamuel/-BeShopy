import React from 'react'
import Navbar from '../../Components/Home/Navbar/Navbar'
import Hero from '../../Components/Home/Hero/Hero'
import BestSelling from '../../Components/Home/BestSelling/BestSelling'
import OurProduct from '../../Components/Home/OurProduct/OurProduct'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BestSelling/>
      <OurProduct/>
    </div>
  )
}

export default Home