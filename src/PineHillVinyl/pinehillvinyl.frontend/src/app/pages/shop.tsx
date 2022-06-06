import Footer from "../components/shared/footer/footer"
import SearchBar from "../components/shared/filter/search-bar/search-bar"

import { Pagination, Products, ShopMenu, Tags, ShopGrid } from "../components/shop/index"
import ErrorModal from "../components/modals/error/error-modal.component"


const Shop = () => {
  const test = 'test';
  const pages = [1,2,3,4,5,6,7]
  return (
    <>
    {/* <ErrorModal message={test}></ErrorModal> */}
    <SearchBar/>
    {/* <Filter/>  */}
    <ShopGrid/>
    <Pagination pages={pages}/>
    </>
  )
}

export default Shop