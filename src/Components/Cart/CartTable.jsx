import React from 'react';
import cartData from '../../Data/Cart/cart';
import emptyCart from '../../assets/Cart/Cart.png'
import CartCount from './CartCount';

const CartTable = () => {
  return (
    <div className=' flex flex-col items-center py-20'>
      {
        cartData.length > 0 ? (
          <table className=' flex flex-col gap-9'>
            <div className=' flex flex-row gap-2 items-center'><p className=' font-poppins font-semibold'>Products in Cart:</p> <CartCount/></div>
            <thead className=' '>
              <tr className=' flex flex-row gap-[14rem] border-b-2 border-[#224F34]'>
                <th className=' font-poppins'>Id</th>
                <th className=' font-poppins'>Product Name</th>
                <th className=' font-poppins'>Product Quantity</th>
                <th className=' font-poppins'>Product Price</th>
              </tr>
            </thead>
            <tbody className=' flex flex-col gap-6'>
              {cartData.map((data) => (
                <tr key={data.id} className=' flex flex-row gap-[12rem]  '>
                  <td className=' font-poppins'>{data.id}</td>
                  <td className=' font-poppins'>{data.description}</td>
                  <td className=' font-poppins'>{data.quantity}</td>
                  <td className=' font-poppins'>{data.price}</td>
                </tr>
              ))}
            </tbody>
            <div>

            </div>
          </table>
        ) : (
          <div className=' flex flex-col items-center gap-8'>
            <div className=' flex flex-row items-center gap-3 bg-[#C5F5D6] px-4 py-3 rounded-lg'>
                <div className=' h-8 w-1 bg-[#224F34] rounded-xl'></div>
                <p className=' font-poppins'>Your cart is empty.</p>
            </div>
            <img src={emptyCart} className=' w-60 h-60'/>
          </div>
        )
      }
    </div>
  );
}

export default CartTable;
