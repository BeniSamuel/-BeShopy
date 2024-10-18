import React from 'react'
import Navbar from '../../Components/Home/Navbar/Navbar'
import Footer from '../../Components/Home/Footer/Footer'
import Form from '../../Components/Login/Form'

const Login = () => {
  return (
    <div className=' flex flex-col items-stretch h-full'>
        <Navbar/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Login