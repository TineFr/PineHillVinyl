import React from 'react'
import {Button} from './add-to-cart-styled'
import {GiShoppingCart} from 'react-icons/gi'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/hooks';
import { addProductToCart } from '../../../../redux/slices/cartSlice';

const  AddToCart = (props: any) => {

  const {amountOfProducts} = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
   const handleClick = (e : any) =>{
    e.preventDefault();
    dispatch(addProductToCart(props.product))
   }  
  return (

    <Button onClick={handleClick}>Add to cart<GiShoppingCart/></Button>

  )
}

export default AddToCart