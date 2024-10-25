import React from 'react'
import hero_img from '../../../assets/Hero/Hero_1.png'

const Hero = () => {
    return (
        <div className=' flex flex-col gap-12 items-center md:flex-row md:items-center md:justify-between  bg-[#C5F5D6] px-20 md:h-[90vh]'>
            <div className=' flex flex-col gap-6'>
                <div className=' text-[#224F34] font-bold text-3xl md:text-5xl font-rufina'>
                    Discover fine product<br />
                    cheap nice product to<br />
                    buy!
                </div>
                <div className=' flex flex-col gap-6'>
                    <p className=' text-[#267D49] font-poppins font-medium'>
                        Explore our collection of product here on Beshopy<br />
                        every product on cheap price with discount enjoy life<br />
                        of online shopping with us.
                    </p>
                    <div>
                        <button className=" text-white bg-[#224F34] px-10 py-4 font-poppins">Explore Now</button>
                    </div>
                </div>
            </div>

            <div className=' bg-[#6BC785] h-[28rem] w-96 rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-[3rem] rounded-bl-[3rem]'>
                <img src={hero_img} className=' h-[28rem]'/>
            </div>
        </div>
    )
}

export default Hero