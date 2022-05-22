import {Products as data} from '../../../../data/shopProducts'
import {ProductsContainer, ProductsWrapper, ProductsItem, ImageContainer, InfoContainer } from './products-styled'



export const Products = () => {
  return (
    
    <ProductsContainer>
      <ProductsWrapper>

{data.map((item, index) => {
                    return (

            <ProductsItem key={index}>
              <ImageContainer>
                <img src={process.env.PUBLIC_URL + item.image}  loading="lazy" alt={item.name}/>
                </ImageContainer>
                <InfoContainer>
                <h1>{item.name} - {item.artist} </h1>
                <h2>€ {item.price}</h2>
                </InfoContainer>
            </ProductsItem>
                    )             
                })}

</ProductsWrapper>

    </ProductsContainer>
  )
}

