import React from 'react'
import {Button} from './add-to-cart-styled'
import {GiShoppingCart} from 'react-icons/gi'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/hooks';
import { addToCart, updateCart } from 'src/app/redux/slices/cartSlice';
import { ShoppingCartOutlined } from '@material-ui/icons';


const  AddToCart = (props: any) => {
  const dispatch = useAppDispatch();
  const {singleProduct} = useAppSelector((state) => state.product);
  const {cart} = useAppSelector((state) => state.cart);
  
   const handleClick = (e : any) =>{
    e.preventDefault();
      const test = {
        id: cart ? cart.id : null,
        product: props.product ? props.product : singleProduct
      }

    dispatch(addToCart(test))
   }  
   
   if (props.icon) {
      return  <ShoppingCartOutlined onClick={handleClick}></ShoppingCartOutlined>;
   
  } else return  <Button onClick={handleClick}>Add to cart<GiShoppingCart/></Button>;

}

export default AddToCart