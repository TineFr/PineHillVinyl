import {Container, Title, PreOrder, ProductsWrapper, Product} from './available-soon-styled'
import {Products as data} from '../../../../data/products'

const AvailableSoon = () => {
  return (
    <Container data-aos="fade-up">
        <Title><span>Coming Soon</span></Title>
        <PreOrder><span>Pre order now</span></PreOrder>
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
    </Container>
  )
}

export default AvailableSoon