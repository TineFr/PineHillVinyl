import Footer from "../components/shared/footer/footer"
import SearchBar from "../components/shared/filter/search-bar/search-bar"

import { Pagination, Products, ShopMenu, Tags, ShopGrid } from "../components/shop/index"


const Shop = () => {

  const pages = [1,2,3,4,5,6,7]
  return (
    <>
    <SearchBar/>
    {/* <Filter/>  */}
    <ShopGrid/>
    <Pagination pages={pages}/>
    <Footer/>
    </>
  )
}

export default Shop