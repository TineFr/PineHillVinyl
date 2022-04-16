import Footer from "../components/main/footer/footer"
import Filter from "../components/shop/filter/filter"
import Pagination from "../components/shop/pagination/pagination"
import { Products } from "../components/shop/products/products"
import Tags from "../components/shop/tags/tags"



const Shop = () => {

  const pages = [1,3,4,4,5,6,7]
  return (
    <>
    <Filter/>
    <Products/>
    <Pagination pages={pages}/>
    <Footer/>
    </>
  )
}

export default Shop