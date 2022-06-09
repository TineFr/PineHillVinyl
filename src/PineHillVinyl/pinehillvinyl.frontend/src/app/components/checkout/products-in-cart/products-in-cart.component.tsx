import {Container, ProductCart, RemoveButton, Image, Title, Price, Amount } from './products-in-cart.styled'

const ProductsInCart = () => {
  return (
    <Container>
      <ProductCart>
        <RemoveButton>
          <Image></Image>
          <Title></Title>
          <Price></Price>
          <Amount></Amount>
        </RemoveButton>
      </ProductCart>
      <ProductCart>
        <RemoveButton>
          <Image></Image>
          <Title></Title>
          <Price></Price>
          <Amount></Amount>
        </RemoveButton>
      </ProductCart>
      <ProductCart>
        <RemoveButton>
          <Image></Image>
          <Title></Title>
          <Price></Price>
          <Amount></Amount>
        </RemoveButton>
      </ProductCart>
    </Container>
  )
}

export default ProductsInCart