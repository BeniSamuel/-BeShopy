import React, { useState } from 'react'
import OurState from './OurState'
import OurMapping from './OurMapping';

const OurProduct = ({ title }) => {
  const [tab, setTab] = useState("sale");
  return (
    <div className='py-12 flex flex-col gap-9 items-center'>
      <p className=' text-3xl font-bold text-[#224F34] font-roboto'>{title || "Our Products"}</p>
      <OurState setTab={setTab} tab={tab} />
      <OurMapping />
      <OurMapping />
    </div>
  );
}

export default OurProduct;
