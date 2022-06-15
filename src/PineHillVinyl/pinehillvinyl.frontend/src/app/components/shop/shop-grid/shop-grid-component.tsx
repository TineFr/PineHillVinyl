import {Grid} from './shop-grid-component-styled'
import {Products, SortProducts, Filter, Pagination} from '../index'
import GenreFilter from '../filter/filter-component'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { reset } from 'src/app/redux/slices/cartSlice';

const ShopGrid = () => {
  const dispatch = useAppDispatch();
  const notify = () => toast("Product added to cart!");
  const {isSuccess} = useAppSelector((state) => state.cart);

  useEffect(() =>{

    if (isSuccess){
      notify();
      dispatch(reset());
    }

  }, [isSuccess]
  )
  return (
    <Grid data-aos="fade-up" data-aos-once="true">
        <SortProducts></SortProducts>
        <GenreFilter></GenreFilter>
        <Products/>
        <Pagination/>
        <ToastContainer position='top-center'/>
    </Grid>
  )
}

export default ShopGrid