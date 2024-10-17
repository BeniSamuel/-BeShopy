import React,{useState} from 'react'
import OurState from './OurState'

const OurProduct = () => {
  const [ tab, setTab ] = useState("sale");
  return (
    <div className='py-12 flex flex-col gap-9 items-center'>
        <p className=' text-xl font-bold'>Our Products</p>
        <OurState setTab={setTab} tab={tab}/>
    </div>
  )
}

export default OurProduct