import React from 'react'
import BestDataMapping from './BestDataMapping'

const BestSelling = () => {
  return (
    <div className=' pt-12'>
        <div className=' flex flex-col justify-center items-center'>
            <div className=' text-[#224F34] font-bold text-xl'>Best Selling</div>
            <p className=' text-[#224F34] text-sm font-medium'>Get in on the trend with our curated selection of best-selling styles.</p>
        </div>
        {/* // Product Division */}
        <BestDataMapping/>
    </div>
  )
}

export default BestSelling