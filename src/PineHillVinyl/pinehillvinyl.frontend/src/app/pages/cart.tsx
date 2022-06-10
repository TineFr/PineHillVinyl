import React from 'react'
import CheckoutComponent from '../components/checkout/products-in-cart/checkout-component/checkout.component'
import ProductsInCart from '../components/checkout/products-in-cart/products-in-cart.component'

const CartPage = () => {
  return (
    <>
    <CheckoutComponent></CheckoutComponent>
    <ProductsInCart></ProductsInCart>
    </>
  )
}

export default CartPage