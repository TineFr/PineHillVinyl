import Footer from "../components/main/footer/footer"
import Filter from "../components/shared/filter/filters/filter"
import Pagination from "../components/shop/pagination/pagination"
import { Products } from "../components/shop/products/products"
import Tags from "../components/shop/tags/tags"
import SearchBar from "../components/shared/filter/search-bar/search-bar"



const Shop = () => {

  const pages = [1,2,3,4,5,6,7]
  return (
    <>
    <SearchBar/>
    {/* <Filter/>  */}
    <Products/>
    <Pagination pages={pages}/>
    <Footer/>
    </>
  )
}

export default Shop