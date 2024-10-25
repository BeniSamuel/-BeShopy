import React from 'react'
import products from "../../Data/OurProduct/sale";

const ProductCP = ({ id }) => {
  return (
    <div>
      {
        products.map((product) => {
          if (product.id === parseInt(id)) {
            return (
              <div key={product.id} className=' flex flex-col gap-5 items-center md:flex-row '>
                <div>
                    <div>
                        <div  className=' bg-[#D3E2D7]'>
                            <img src={product.imgSource} alt="" />
                        </div>
                        <div  className=' bg-[#D3E2D7]'><img src={product.imgSource} alt="" /></div>
                        <div  className=' bg-[#D3E2D7]'><img src={product.imgSource} alt="" /></div>
                        <div  className=' bg-[#D3E2D7]'><img src={product.imgSource} alt="" /></div>
                    </div>
                    <div className=' bg-[#D3E2D7]'> <img src={product.imgSource}/> </div>
                    
                </div>
                <div className=' flex flex-col gap-5 items-center'>
                    <div className=' font-roboto font-semibold text-3xl'>{product.description}</div>
                    <p className=' font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                     Porro, sed tempora maiores perspiciatis tempore ratione<br/> 
                     delectus repellat pariatur quasi mollitia, nam sunt exercitationem<br/> 
                     doloremque obcaecati eaque libero totam beatae error?</p>
                </div>
              </div>
            )
          }
          return null; // To avoid "missing return" warnings
        })
      }
    </div>
  )
}

export default ProductCP;
