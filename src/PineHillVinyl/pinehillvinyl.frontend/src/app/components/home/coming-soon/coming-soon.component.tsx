import {Container, Title, PreOrder, ProductsWrapper, Product, MarqueeContainer} from './coming-soon.styled'
import {Products as data} from '../../../../data/products'


const ComingSoon = () => {

  return (

    <Container data-aos="fade-up" data-aos-once="true">
        <Title><span>Coming Soon</span></Title>
        <PreOrder><span>Pre order now</span></PreOrder>
        <MarqueeContainer speed={50}> 
        <ProductsWrapper>
{data.map((item, index) => {
                    return (

            <Product key={index}>
                <img src={process.env.PUBLIC_URL + item.image}  loading="lazy"/>
                <h1>{item.artist}</h1>
                <h2>{item.name}</h2>
                <p>{item.releaseDate}</p>
            </Product>
                    )             
                })}
        </ProductsWrapper>
        </MarqueeContainer>
    </Container>
  )
}

export default ComingSoon