import { useState } from 'react';
import { ProductCartModel } from 'src/app/models';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import {Container, ProductCart, RemoveButton, ImageContainer, Title, Price, Amount, ProductWrapper, DetailsWrapper } from './products-in-cart.styled'

const ProductsInCart = () => {

  const {cart, } = useAppSelector((state) => state.cart);

  return (
    <Container>
{cart!.products.map((product : ProductCartModel, index) => {
                    return (
                      <ProductCart key={index}>
                      <RemoveButton/>
                        <ImageContainer>
                        <img src={process.env.PUBLIC_URL + product.image}  loading="lazy"/>
                        </ImageContainer>
                        <Title>{product.artist} - {product.title}</Title>
                        <DetailsWrapper>
                        <Price>{product.price}</Price>
                        <Amount></Amount>
                        </DetailsWrapper>
                    </ProductCart>
                    )             
                })}
    </Container>
  )
}

export default ProductsInCart