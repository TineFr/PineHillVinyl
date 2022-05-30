import {Grid} from './shop-grid-component-styled'
import {Products, SortProducts, Filter} from '../index'
const ShopGrid = () => {
  return (
    <Grid data-aos="fade-up" data-aos-once="true">
        <SortProducts></SortProducts>
        <Filter></Filter>
        <Products/>
    </Grid>
  )
}

export default ShopGrid