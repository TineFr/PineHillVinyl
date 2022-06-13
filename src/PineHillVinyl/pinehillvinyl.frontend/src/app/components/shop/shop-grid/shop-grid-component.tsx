import {Grid} from './shop-grid-component-styled'
import {Products, SortProducts, Filter, Pagination} from '../index'
import GenreFilter from '../filter/filter-component'
const ShopGrid = () => {
  return (
    <Grid data-aos="fade-up" data-aos-once="true">
        <SortProducts></SortProducts>
        <GenreFilter></GenreFilter>
        <Products/>
        <Pagination/>
    </Grid>
  )
}

export default ShopGrid