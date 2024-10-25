import React,{useState} from 'react'

const ProdCout = () => {
  const [count, setCount] = useState(1);

  function handleDecrease (){
    if (count > 0 ) {
        setCount(count -1)
    }
    else setCount (0)
  }

  function handleIncrease (){
    setCount(count + 1);
  }
  return (
    <div className=" cursor-pointer flex flex-col gap-3">
        <p className=' font-poppins'>Quantity: </p>
        <div className=' flex flex-row'>
            <div onClick={handleDecrease} className=' flex flex-col items-center justify-center text-white font-roboto w-10 h-8 bg-[#224F34]'>-</div>
            <div className=' flex flex-col items-center justify-center text-[#224F34] font-roboto w-10 h-8 border-y-2 border-[#224F34]'>{count}</div>
            <div onClick={handleIncrease} className=' flex flex-col items-center justify-center text-white font-roboto w-10 h-8 bg-[#224F34]'>+</div>
        </div>
    </div>
  )
}

export default ProdCout