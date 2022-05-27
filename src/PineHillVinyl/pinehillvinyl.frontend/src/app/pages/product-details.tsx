import React from 'react'
import Filter from "../components/shared/filter/filters/filter"
import AddToCart from '../components/shared/buttons/add to cart/add-to-cart'
import Availability from '../components/product-details/availability/availability-component'
const ProductDetails = () => {
  return (
    <>
    <Filter></Filter>
    <AddToCart></AddToCart>
    <Availability></Availability>

    
    </>
  )
}

export default ProductDetails