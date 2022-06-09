import {Container, ProductCart, RemoveButton, ImageContainer, Title, Price, Amount, ProductWrapper, DetailsWrapper } from './products-in-cart.styled'

const ProductsInCart = () => {
  return (
    <Container>
      <ProductCart>
        <RemoveButton/>
          <ImageContainer>
          <img src={process.env.PUBLIC_URL + "records/record1.jpg"}  loading="lazy"/>
          </ImageContainer>
          <Title>Froukje - uitzinnig</Title>
          <DetailsWrapper>
          <Price>€30</Price>
          <Amount></Amount>
          </DetailsWrapper>
      </ProductCart>

      <ProductCart>
        <RemoveButton/>
          <ImageContainer>
          <img src={process.env.PUBLIC_URL + "records/record1.jpg"}  loading="lazy"/>
          </ImageContainer>
          <Title>Froukje - uitzinnig</Title>
          <DetailsWrapper>
          <Price>€30</Price>
          <Amount></Amount>
          </DetailsWrapper>
      </ProductCart>

      <ProductCart>
        <RemoveButton/>
          <ImageContainer>
          <img src={process.env.PUBLIC_URL + "records/record1.jpg"}  loading="lazy"/>
          </ImageContainer>
          <Title>Froukje - uitzinnig</Title>
          <DetailsWrapper>
          <Price>€30</Price>
          <Amount></Amount>
          </DetailsWrapper>
      </ProductCart>

    </Container>
  )
}

export default ProductsInCart