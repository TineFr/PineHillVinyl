import AddToCart from 'src/app/components/product-details/buy-block/add to cart/add-to-cart';
import CartButton from 'src/app/components/shared/navigation/desktop-navbar/cart-button/cart-button.component';
import {ProductModel} from '../../../../models'

import {ProductItem, ImageContainer, InfoContainer, ProductLink, PriceContainer } from './product-list-item-styled'
const ProductListItem = (props: any) => {
  const {product} = props;
  return (
    <ProductItem>
    <ProductLink to={'/product/' + product.id}>
    <ImageContainer>
      <img src={process.env.PUBLIC_URL + product.image}  loading="lazy" alt={product.title}/>
      </ImageContainer>
      <InfoContainer>
      <h1>{product.title}  - </h1>
      <h2>{product.artist}</h2>
      <PriceContainer>
      <h2>€ {product.price}</h2>
      <AddToCart icon={true} product={product}/>
      </PriceContainer>
      </InfoContainer>

  </ProductLink>
  </ProductItem>
  )
}

export default ProductListItem