import React, { useState } from 'react'
import ShopState from './ShopState'
import ShopMapping from './ShopMapping';

const OurProduct = () => {
  const [tab, setTab] = useState("sale");
  return (
    <div className='py-12 flex flex-col gap-9 items-center'>
      <p className=' text-3xl font-bold text-[#224F34] font-roboto'>Our Products</p>
      <ShopState setTab={setTab} tab={tab} />
      <ShopMapping />
      <ShopMapping />
    </div>
  )
}

export default OurProduct