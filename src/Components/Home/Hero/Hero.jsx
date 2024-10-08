import React from 'react'

const Hero = () => {
  return (
    <div className=' flex md:justify-between items-center bg-[#C5F5D6] px-20 h-[75vh]'>
        <div className=' flex flex-col gap-6'>
            <div className=' text-[#224F34] font-semibold text-3xl'>
                Discover fine product<br/>
                cheap nice product to<br/>
                buy!
            </div>
            <div className=' flex flex-col gap-6'>
                <p className=' text-[#267D49]'>
                    Explore our collection of product here on Beshopy<br/>
                    every product on cheap price with discount enjoy life<br/>
                    of online shopping with us.
                </p>

                <button className=" text-white bg-[#224F34] px-6 py-4">Explore Now</button>
            </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default Hero