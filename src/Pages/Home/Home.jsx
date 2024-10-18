import React from 'react'
import Navbar from '../../Components/Home/Navbar/Navbar'
import Hero from '../../Components/Home/Hero/Hero'
import BestSelling from '../../Components/Home/BestSelling/BestSelling'
import OurProduct from '../../Components/Home/OurProduct/OurProduct'
import Exclusive from '../../Components/Home/Exclusive/Exclusive'
import ForYou from '../../Components/Home/ForYou/ForYou'
import Testimonial from '../../Components/Home/Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BestSelling/>
      <OurProduct/>
      <Exclusive/>
      <ForYou/>
      <Testimonial/>
    </div>
  )
}

export default Home