
import SearchBar from "../components/shared/filter/search-bar/search-bar"
import { Pagination, Products, ShopMenu, Tags, ShopGrid } from "../components/shop/index"



const Shop = () => {
  const pages = [1,2,3,4,5,6,7]
  return (
    <>
    <SearchBar/>
    <ShopGrid/>
    <Pagination pages={pages}/>
    </>
  )
}

export default Shop