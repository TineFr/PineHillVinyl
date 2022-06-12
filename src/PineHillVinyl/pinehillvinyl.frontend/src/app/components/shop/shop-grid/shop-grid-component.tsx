import {Grid} from './shop-grid-component-styled'
import {Products, SortProducts, Filter} from '../index'
import GenreFilter from '../filter/filter-component'
const ShopGrid = () => {
  return (
    <Grid data-aos="fade-up" data-aos-once="true">
        <SortProducts></SortProducts>
        <GenreFilter></GenreFilter>
        <Products/>
    </Grid>
  )
}

export default ShopGrid