import React from 'react'
import products from "../../Data/OurProduct/sale";
import starSvg from '../../assets/star.svg'
import ProductCu from './ProductCu';
import ProdCout from './ProdCout';

const ProductCP = ({ id }) => {
  return (
    <div>
      {
        products.map((product) => {
          if (product.id === parseInt(id)) {
            return (
              <div key={product.id} className=' flex flex-col gap-5 md:gap-20 items-center md:flex-row py-16'>
                <div className=' flex flex-row md:gap-20'>
                    <div className=' flex flex-col gap-5 px-9 py-4'>
                        <img src={product.imgSource} className=' h-44 ' />
                        <img src={product.imgSource} className=' h-44 ' />
                    </div>
                    <div className=' bg-[#F2F2F2] flex flex-col justify-center'>
                        <img src={product.imgSource}/>
                    </div>
                </div>
    
                <div className=' flex flex-col gap-5'>
                    <div className=' flex flex-col gap-1'>
                        <div className=' font-poppins font-semibold text-3xl'>{product.description}</div>
                        <div className=' flex flex-row'>
                            <img src={starSvg} className=' h-5'/>
                            <img src={starSvg} className=' h-5'/>
                            <img src={starSvg} className=' h-5'/>
                            <img src={starSvg} className=' h-5'/>
                            <img src={starSvg} className=' h-5'/>
                        </div>
                        <div className=' font-roboto font-medium text-xl'>{product.rating}</div>
                    </div>
                    
                    <p className=' font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                     Porro, sed tempora maiores perspiciatis tempore ratione<br/> 
                     delectus repellat pariatur quasi mollitia, nam sunt exercitationem<br/> 
                     doloremque obcaecati eaque libero totam beatae error?</p>

                    <ProductCu/>

                    <ProdCout price={product.price}/>
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
