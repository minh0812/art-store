import React from 'react'
import Title from '../../components/Title'
import { Button, InputNumber, Rate } from 'antd'
import CartList from '../../modules/cart/CartList'

const Cart = () => {

  return (
    <>
        <Title title={"cart"} items={["home", "cart"]}/>
        <CartList />
    </>
  )
}

export default Cart