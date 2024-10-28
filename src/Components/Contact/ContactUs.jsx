import React from 'react'
import contact from '../../assets/Contact/Contact.svg';

const ContactUs = () => {
  return (
    <div className=' flex flex-col py-12'>
        <div className=' flex flex-col items-center text-xl font-poppins font-semibold'> Contact Us </div>
        <div className=' flex flex-col items-center md:flex-row w-full'>
            <div className=' w-1/2 flex flex-col items-center'>
                <img src={contact} className=' h-96'/>
            </div>
            <div className=' w-1/2 flex flex-col items-center gap-3 py-10'>
                <input placeholder=' Enter Email...' className=' bg-transparent outline-none border-2 border-[#224F34] w-96 py-3 pl-4 placeholder:font-poppins font-poppins rounded-lg'/>
                <input placeholder=' Enter description...' className=' bg-transparent outline-none border-2 border-[#224F34] w-96 h-56 pl-4 placeholder:font-poppins font-poppins rounded-lg'/>
                <input type='submit' value="Submit" className=' bg-[#224F34] text-white font-poppins text-center w-96 py-3 rounded-lg'/>
            </div>
        </div>
    </div>
  )
}

export default ContactUs