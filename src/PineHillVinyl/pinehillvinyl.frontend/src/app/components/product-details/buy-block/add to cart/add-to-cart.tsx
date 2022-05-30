import React from 'react'
import {Button, Container} from './add-to-cart-styled'
import {GiShoppingCart} from 'react-icons/gi'

const AddToCart = () => {
  return (
    <Container>
    <Button>Add to cart<GiShoppingCart/></Button>
    </Container>
  )
}

export default AddToCart