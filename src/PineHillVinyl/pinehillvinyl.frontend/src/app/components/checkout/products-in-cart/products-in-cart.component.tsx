import { useEffect, useState } from 'react';
import { CartModel, ProductCartModel } from 'src/app/models';
import { CartItem } from 'src/app/models/cart/cart-item.model';
import { removeFromCart, updateCart } from 'src/app/redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import {Container, ProductCart, RemoveButton, ImageContainer, Title, Price, Quantity, ProductWrapper, DetailsWrapper, QuantityWrapper, Counter, Test } from './products-in-cart.styled'

const ProductsInCart = () => {
  const dispatch = useAppDispatch();
  const {cart } = useAppSelector((state) => state.cart);
  const [quantity, setQuantity] = useState();
  const newCart : CartModel = {
    id: '',
    items: JSON.parse(localStorage.getItem('items') || '[]'),
    quantity: 0
  }


  const removeProduct = (product : any) =>{
      const item = {
        id: cart ? cart.id : null,
        product: product
      }
      dispatch(removeFromCart(item))

   } 

   const handleDecrease = (item : any) =>{
    item.quantity -= 1;
    if (item.quantity == 0){
      removeProduct(item.product);
   }

   else{
    const test = {
      cart : cart,
      cartItem : item
     }
     dispatch(updateCart(test))
   } 
  }

  const handleIncrease = (item : any) =>{
    item.quantity += 1;
    dispatch(updateCart(item))
  }

  let displayCart = cart ? cart : newCart ;

  return (
    <Container>

{displayCart!.items.map((item: CartItem, index : number) => {
                    return (
                      <ProductCart key={index}>
                      <RemoveButton onClick={() => removeProduct(item.product)}/>
                        <ImageContainer>
                        <img src={process.env.PUBLIC_URL + item.product.image}  loading="lazy"/>
                        </ImageContainer>
                        <Title>{item.product.artist} - {item.product.title}</Title>
                        <DetailsWrapper>
                          <Test>
                        <Price>€{item.product.price}</Price>
                        <QuantityWrapper>
                         <Counter onClick={() => handleDecrease(item)}>-</Counter>
                        <Quantity>{item.quantity}</Quantity>
                        <Counter  onClick={() => handleIncrease(item)}>+</Counter>
                        </QuantityWrapper>
                        </Test>
                        </DetailsWrapper>
                  
                    </ProductCart>
                    )             
                })}
    </Container>
  )
}

export default ProductsInCart
