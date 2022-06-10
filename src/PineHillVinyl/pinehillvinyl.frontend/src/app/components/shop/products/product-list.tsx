import axios from 'axios';
import { useEffect, useState } from 'react';
import {ProductsContainer, ProductsWrapper } from './product-list-styled'
import {ProductModel} from '../../../models'
import ProductListItem from './product-list-item/product-list-item'
import Spinner from '../../shared/spinner/spinner.component';
import {Products as data} from '../../../../data/shopProducts'

 



export const Products =  () => {
  
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [isBusy, setIsBusy] = useState(false);



  useEffect( () =>{
    setIsBusy(true);
    axios.get<ProductModel[]>("http://localhost:5000/api/v1/products")

    .then(res => {
      setProducts(res.data);
      setIsBusy(false);
    })
    .catch((err) => {

      setIsBusy(false);
    });;
  }, [])
  
  return (   
    <ProductsContainer>
      <Spinner busy={isBusy} />
      <ProductsWrapper>

      {data!.map((product : any, index) => {
                    return (
                      <ProductListItem key={index} product={product}/>
                    )             
                })}

{/* {products!.map((product : Product, index) => {
                    return (
                      <ProductListItem key={index} product={product}/>
                    )             
                })} */}

</ProductsWrapper>

    </ProductsContainer>
  )
}

