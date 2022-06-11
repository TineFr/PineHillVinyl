import axios from 'axios';
import { useEffect, useState } from 'react';
import {ProductsContainer, ProductsWrapper } from './product-list-styled'
import {ProductModel} from '../../../models'
import ProductListItem from './product-list-item/product-list-item'
import Spinner from '../../shared/spinner/spinner.component';
import {Products as data} from '../../../../data/shopProducts'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import { getProducts } from 'src/app/redux/slices/productSlice';

 



export const Products =  () => {
  
  const [data, setData] = useState<ProductModel[]>([]);
  const dispatch = useAppDispatch();
  const {products, isLoading} = useAppSelector((state) => state.product);

  useEffect(() =>{
    if(products){
      setData(products)
    }     
  }, [products])

  useEffect(() =>{
      dispatch(getProducts(1));  

    }, []) 
  return (   
    <ProductsContainer>
      <Spinner busy={isLoading} /> 
      <ProductsWrapper>

      {/* {data!.map((product : any, index) => {
                    return (
                      <ProductListItem key={index} product={product}/>
                    )             
                })} */}

{data!.map((product : ProductModel, index) => {
                    return (
                      <ProductListItem key={index} product={product}/>
                    )             
                })}

</ProductsWrapper>

    </ProductsContainer>
  )
}

