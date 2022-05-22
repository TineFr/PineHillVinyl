
import {Container, Title, ProductsWrapper, Product} from './spotlight-styled'
import {Products as data} from '../../../../data/products'



export const Spotlight = () => {

  return (
        <Container>
        <Title data-aos="fade-right"><span>IN THE SPOTLIGHT</span></Title>
          <ProductsWrapper data-aos="fade-up">
  {data.map((item, index) => {
                      return (
              <Product key={index}>
                  <img src={process.env.PUBLIC_URL + item.image}  loading="lazy"/>
                  <h1>{item.artist}</h1>
                  <h2>{item.name}</h2>
                  <p>{item.year}</p>
              </Product>
                      )             
                  })}
          </ProductsWrapper>
        </Container>

  )
}
