import { useEffect, useState } from 'react';
import { CartModel, ProductCartModel } from 'src/app/models';
import { CartItem } from 'src/app/models/cart/cart-item.model';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import {Container, ProductCart, RemoveButton, ImageContainer, Title, Price, Amount, ProductWrapper, DetailsWrapper } from './products-in-cart.styled'

const ProductsInCart = () => {

  const {cart } = useAppSelector((state) => state.cart);
  const newCart : CartModel = {
    id: '',
    items: JSON.parse(localStorage.getItem('items') || '[]'),
    quantity: 0
  }

  let displayCart = cart ? cart : newCart ;

  return (
    <Container>

{displayCart!.items.map((item: CartItem, index : number) => {
                    return (
                      <ProductCart key={index}>
                      <RemoveButton/>
                        <ImageContainer>
                        <img src={process.env.PUBLIC_URL + item.product.image}  loading="lazy"/>
                        </ImageContainer>
                        <Title>{item.product.artist} - {item.product.title}</Title>
                        <DetailsWrapper>
                        <Price>€{item.product.price}</Price>
                        <Amount>{item.quantity}</Amount>
                        </DetailsWrapper>
                    </ProductCart>
                    )             
                })}
    </Container>
  )
}

export default ProductsInCart