import axios from 'axios';
import { useEffect, useState } from 'react';
import {ProductsContainer, ProductsWrapper } from './product-list-styled'
import {Product} from '../../../interfaces/index'
import ProductListItem from './product-list-item/product-list-item'




export const Products =  () => {
  
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


  const [products, setProducts] = useState<Product[]>([]);


  useEffect(  () =>{
    axios.get<Product[]>("http://localhost:4000/api/v1/products")
    .then(res => {
      setProducts(res.data);
    });
  }, [])
  
  return (   
    <ProductsContainer>
      <ProductsWrapper>

{products!.map((product : Product, index) => {
                    return (
                      <ProductListItem key={index} product={product}/>
                    )             
                })}

</ProductsWrapper>

    </ProductsContainer>
  )
}

