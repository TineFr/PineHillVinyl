import axios from 'axios';
import { useEffect, useState } from 'react';
import {Products as data} from '../../../../data/shopProducts'
import {ProductsContainer, ProductsWrapper, ProductsItem, ImageContainer, InfoContainer } from './products-styled'




export const Products =  () => {
  
  interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    artist: string;
}

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


  const [products, setProducts] = useState<Product[]>([]);
  // axios.get<Product[]>("http://localhost:4000/api/v1/products")
  // .then(res => {
  //   console.log(res.data);
  //   setProducts(res.data);
  // });

  useEffect(  () =>{
    axios.get<Product[]>("http://localhost:4000/api/v1/products")
    .then(res => {
      setProducts(res.data);
    });
  })
  return (

    
    <ProductsContainer>
      <ProductsWrapper>

{products!.map((item : Product, index) => {
                    return (

            <ProductsItem key={index}>
              <ImageContainer>
                <img src={process.env.PUBLIC_URL + item.image}  loading="lazy" alt={item.title}/>
                </ImageContainer>
                <InfoContainer>
                <h1>{item.title} - {item.artist} </h1>
                <h2>€ {item.price}</h2>
                </InfoContainer>
            </ProductsItem>
                    )             
                })}

</ProductsWrapper>

    </ProductsContainer>
  )
}

