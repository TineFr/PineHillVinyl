
import { useParams } from 'react-router-dom'
import BuyBlock from '../components/product-details/buy-block/buy-block-component'
import ProductHeader from '../components/product-details/product-header/product-header.component'
import SearchBar from '../components/shared/filter/search-bar/search-bar'
const ProductDetails = () => {
  return (
    <>
    <SearchBar></SearchBar>
    {/* <BuyBlock></BuyBlock> */}
    <ProductHeader/>
    </>
  )
}

export default ProductDetails