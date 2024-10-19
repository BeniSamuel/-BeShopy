import React from 'react'
import img from '../../assets/Hero/Hero_1.png'
import google from '../../assets/Google.svg'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div className=' flex flex-col md:flex-row items-center'>
        <div className=' bg-[#6BC785] w-full md:w-1/2 flex flex-col items-center justify-center'>
           <img src={img} className=' h-[30rem]'/> 
        </div>
        <div className=' flex flex-col items-center w-1/2 gap-9'>
            <div className=' font-roboto font-medium text-xl'>Login in BeShopy</div>
            <p className=' font-poppins '>Enter Details Please</p>
            <div className=' flex flex-col gap-6'>
                <input type="text" placeholder='Email' className=' outline-none border-b-2 border-[#224F34] bg-transparent w-96 placeholder:font-poppins font-poppins' />
                <input type="email" placeholder='Password' className=' outline-none border-b-2 border-[#224F34] bg-transparent w-96 placeholder:font-poppins font-poppins'/>
            </div>
            <div className=' flex flex-col gap-3'>
                <button className=' bg-[#224F34] text-white font-poppins w-96 py-3'>Login</button>
                <button className=' border-2 border-[#224F34] flex flex-row items-center py-3 justify-center gap-2'>
                    <img src={google}/>
                    <p className=' font-poppins'>Signup With Google</p>
                </button>
            </div>
            <div className=' font-poppins'>New to site.<span className=' font-poppins text-[#224F34] font-bold'><Link to="/signup">Signup</Link></span></div>
        </div>
    </div>
  )
}

export default Form