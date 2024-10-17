import React from 'react'
import img1 from '../../../assets/Exclusive/Exclusive_1.png'

const Exclusive = () => {
  return (
    <div className=' flex flex-col items-center py-12'>
        <div className=' bg-[#C2EFD4] w-[80%] flex flex-col items-center md:flex-row md:items-center md:justify-center gap-12'>
            <div>
                <img src={img1} className=' h-80'/>
            </div>
            <div className=' flex flex-col gap-4'>
                <div className=' text-[#224F34] font-bold text-xl'>Exclusive offer</div>
                <div className=' font-medium'>
                    Unlock the ultimate style upgrade with our exclusive<br/>
                    offer Enjoy savings of up to 40% off on our latest New<br/>
                    Arrivals
                </div>

                <div className=' flex flex-row gap-4'>
                    <div className=' bg-white flex flex-col items-center px-2 justify-center '>
                        <p className=' font-medium'>06</p>
                        <p className=' font-medium'>Days</p>
                    </div>
                    <div className=' bg-white flex flex-col items-center px-2 justify-center'>
                        <p className=' font-medium'>18</p>
                        <p className=' font-medium'>Hours</p>
                    </div>
                    <div className=' bg-white flex flex-col items-center px-2 justify-center'>
                        <p className=' font-medium'>48</p>
                        <p className=' font-medium'>Mins</p>
                    </div>
                </div>

                <div>
                    <button className=' bg-[#224F34] text-white font-normal px-6 py-2 flex flex-row items-center justify-center text-sm'>BUY NOW</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Exclusive