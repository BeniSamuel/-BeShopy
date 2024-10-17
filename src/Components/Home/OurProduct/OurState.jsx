import React from 'react'

const OurState = ({setTab, tab}) => {
  return (
    <div className=' flex flex-row gap-5 cursor-pointer'>
        <div className=' flex flex-col items-center' onClick={() => {setTab("sale")}}>SALE { tab == "sale" ? <hr className=' bg-[#224F34] h-1 w-10'/> : ""}</div>
        <div className=' flex flex-col items-center' onClick={() => {setTab("hot")}}>HOT { tab == "hot" ? <hr className=' bg-[#224F34] h-1 w-10'/> : ""}</div>
        <div  onClick={() => {setTab("arrivals")}}>NEW ARRIVALS { tab == "arrivals" ? <hr className=' bg-[#224F34] h-1 w-30'/> : ""}</div>
        <div className=' flex flex-col items-center' onClick={() => {setTab("accessories")}}>ACCESSORIES { tab == "accessories" ? <hr className=' bg-[#224F34] h-1 w-24'/> : ""}</div>
    </div>
  )
}

export default OurState