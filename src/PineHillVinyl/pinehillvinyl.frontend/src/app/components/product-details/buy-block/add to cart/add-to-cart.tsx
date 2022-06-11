import React from 'react'
import {Button} from './add-to-cart-styled'
import {GiShoppingCart} from 'react-icons/gi'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/hooks';
import { updateCart } from 'src/app/redux/slices/cartSlice';


const  AddToCart = (props: any) => {

  const dispatch = useAppDispatch();
   const handleClick = (e : any) =>{
    e.preventDefault();
    dispatch(updateCart(props.product))
   }  
  return (

    <Button onClick={handleClick}>Add to cart<GiShoppingCart/></Button>

  )
}

export default AddToCart