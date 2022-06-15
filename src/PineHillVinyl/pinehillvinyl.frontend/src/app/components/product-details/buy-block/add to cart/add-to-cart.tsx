import React, { useEffect, useState } from 'react'
import {Button, Container} from './add-to-cart-styled'
import {GiShoppingCart} from 'react-icons/gi'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/hooks';
import { addToCart, updateCart } from 'src/app/redux/slices/cartSlice';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  AddToCart = (props: any) => {
  const dispatch = useAppDispatch();
  const {singleProduct} = useAppSelector((state) => state.product);
  const {cart} = useAppSelector((state) => state.cart);
  const [isDisabled, setIsDisabled] = useState(false);

  // useEffect(() =>{
  //   let product =  props.product ? props.product : singleProduct
  //   if (cart){
  //     let inCart = cart?.items.filter((x : any) => x.product.id == product.id)
  //     if (inCart[0])  setIsDisabled(true);
  //     else  setIsDisabled(false);
  //   }
  //   else{
  //     let products = JSON.parse(localStorage.getItem('items') || '[]');
  //     let inCart = products.filter((x : any) => x.product.id == product.id)
  //     if (inCart[0])  setIsDisabled(true);
  //     else  setIsDisabled(false);
  //   } 
    


  //   }, []);

   const handleClick = (e : any) =>{
    e.preventDefault();
      const test = {
        id: cart ? cart.id : null,
        product: props.product ? props.product : singleProduct
      }
    dispatch(addToCart(test));

   }  

   if (props.icon) {
      return (
        <>
        <ShoppingCartOutlined onClick={handleClick}></ShoppingCartOutlined>
        </>
      )
   
  } else return  <Button disabled={isDisabled} onClick={handleClick}>Add to cart<GiShoppingCart/></Button>;

}

export default AddToCart