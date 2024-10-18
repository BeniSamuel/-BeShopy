import React from 'react'
import facebook from '../../../assets/Facebook.svg'
import instagram from "../../../assets/Instagram.svg"
import twitter from '../../../assets/Twitter.svg'

const Footer = () => {
  return (
    <div className=' py-14 bg-[#224F34] flex flex-col gap-16'>
        <div className=' flex flex-col gap-8 md:flex-row md:gap-40 md:justify-center '>
            <div className=' flex flex-col gap-3'>
                <div className=' text-2xl text-white font-bold font-rufina'>BeShopy</div>
                <p className=' font-roboto text-white'>Social Media</p>
                <div className=' flex flex-row gap-2'>
                    <img src={facebook} className=' h-7'/>
                    <img src={instagram} className=' h-7'/>
                    <img src={twitter} className=' h-7'/>
                </div>
            </div>
            <div className=' flex flex-col gap-3'>
                <div className=' font-roboto text-white'>SHOP</div>
                <ul className=' flex flex-col gap-2'>
                    <li className=' font-poppins text-[#C2EFD4]'>Products</li>
                    <li className=' font-poppins text-[#C2EFD4]'>Overview</li>
                    <li className=' font-poppins text-[#C2EFD4]'>Pricing</li>
                    <li className=' font-poppins text-[#C2EFD4]'>Releases</li>
                </ul>
            </div>
            <div className=' flex flex-col gap-3'>
                <div className=' text-white font-roboto'>COMPANY</div>
                <ul className=' flex flex-col gap-2'>
                    <li className=' font-poppins text-[#C2EFD4]'>About Us</li>
                    <li className=' font-poppins text-[#C2EFD4]'>Contact</li>
                    <li className=' font-poppins text-[#C2EFD4]'>News</li>
                    <li className=' font-poppins text-[#C2EFD4]'>Support</li>
                </ul>
            </div>
            <div className=' flex flex-col gap-3'>
                <div className=' text-white font-roboto'>STAY UP TO DATE</div>
                <div className=' flex flex-row items-center'>
                    <input type="email" placeholder='Enter Your Email' className=' bg-transparent placeholder:font-poppins placeholder:text-white border-2 border-[#A3F3BE] px-4 py-2 pl-4 outline-none text-white'/>
                    <input type="submit" value="SUBMIT" className=' font-poppins text-[#224F34] bg-[#A3F3BE] px-4 py-[0.64rem]'/>
                </div>
            </div>
        </div>

        <div className=' flex flex-row items-center gap-4 justify-center'>
            <div className=' bg-[#A3F3BE] h-[0.12rem] w-[27rem] md:w-[52rem]'></div>
            <div className=' flex flex-row gap-4'>
                <p className=' font-poppins text-white text-sm'>Terms</p>
                <p className=' font-poppins text-white text-sm'>Privacy</p>
                <p className=' font-poppins text-white text-sm'>Cookies</p>
            </div>
        </div>
    </div>
  )
}

export default Footer