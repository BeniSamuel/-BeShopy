import React from 'react'
import cartData from '../../Data/Cart/cart'

const CartCount = () => {
  return (
    <div>
        {cartData.length}
    </div>
  )
}

export default CartCount