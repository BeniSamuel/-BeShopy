import React from 'react'
import Navbar from '../../Components/Home/Navbar/Navbar'
import Hero from '../../Components/Home/Hero/Hero'
import BestSelling from '../../Components/Home/BestSelling/BestSelling'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BestSelling/>
    </div>
  )
}

export default Home