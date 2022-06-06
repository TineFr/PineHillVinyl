import {Product} from '../../../../models/interfaces/index'
import {ProductsItem, ImageContainer, InfoContainer } from './product-list-item-styled'

const ProductListItem = (props: any) => {
  const {product} = props;
  return (
    <ProductsItem>
    <ImageContainer>
      <img src={process.env.PUBLIC_URL + product.image}  loading="lazy" alt={product.title}/>
      </ImageContainer>
      <InfoContainer>
      <h1>{product.title} - {product.artist} </h1>
      <h2>€ {product.price}</h2>
      </InfoContainer>
  </ProductsItem>
  )
}

export default ProductListItem