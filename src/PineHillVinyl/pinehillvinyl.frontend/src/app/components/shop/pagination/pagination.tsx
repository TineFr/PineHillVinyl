import {Container, PaginationComponent} from './pagination-styled'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import {useEffect, useState} from 'react'

import { getProducts } from 'src/app/redux/slices/productSlice';

const Pagination = () => {
    

  const dispatch = useAppDispatch();
  const {pagination} = useAppSelector((state) => state.product);
  const [totalPages, setTotalPages] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() =>{
    if (pagination){
      setTotalPages(pagination.TotalPages)

    }
  }, [pagination])

  const handlePageClick = (e:any) => {
      dispatch(getProducts(e.selected + 1))
      window.scrollTo(0, 0)
  };
 let test = null;
 return (
<Container>
    <PaginationComponent
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount = {null!}
      />
      </Container>

  )
}

export default Pagination