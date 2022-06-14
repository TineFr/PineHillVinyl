import {Container, SortSelection, SortIcon} from './sort-products-component-styled'
import {SortCategories as data} from '../../../../data/sort-categories'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import { useEffect, useState } from 'react';
import { sortProducts } from 'src/app/redux/slices/productSlice';

const SortProducts = () => {


  const dispatch = useAppDispatch();
  const {products} = useAppSelector((state) => state.product);


  const handleSort = (e:any) =>{
    const sortObject = {
      sortOption : e.target.value,
      products : products


    }
  
    dispatch(sortProducts(sortObject))

  }
  
  return (
    <Container>
        <SortSelection onChange={handleSort}>
        {data.map((item, index) => {
                return (
                    <option key={index} value={item.name}>{item.name}  </option>
                )             
                    })}



        </SortSelection>
        <SortIcon></SortIcon>
    </Container>
  )
}

export default SortProducts