import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import { getProductById } from 'src/app/redux/slices/productSlice';
import { ProductModel } from '../../../models';
import BuyBlock from '../buy-block/buy-block-component';
import {Container, Header, Artist, Title, ImageContainer, ProductDetails, Price, Description, Specifications,TrackList, Test} from './product-header.styled'

const ProductHeader = () => {
  const [product, setProduct] = useState<ProductModel>();
  let { id } = useParams();

  const dispatch = useAppDispatch();
  const {singleProduct} = useAppSelector((state) => state.product);

  useEffect(() =>{
      dispatch(getProductById(id));   

  }, [dispatch])

  useEffect(() =>{
    if(singleProduct){
      setProduct(singleProduct);
    }  

}, [singleProduct])

    return (
      <>

      <Container data-aos="fade-up">
        <Header>
          <Artist>{product?.artist}</Artist>
          <Title>{product?.title}</Title>
        </Header>
        <Test></Test>
        <ImageContainer>
      <img src={process.env.PUBLIC_URL + product?.image}  loading="lazy"/>
      </ImageContainer>
      <ProductDetails>
        <Price>€{product?.price}</Price>
        <Description>
          <h1>Description</h1>
         <span>{product?.description || 'test'}</span> </Description>
        <Specifications>
        <h1>Specifications</h1>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
        </Specifications>
      </ProductDetails>
      <TrackList>
      <h1>Tracklist</h1>
      {product?.trackList.map((track : string, index) => {
                    return (
                      <p key={index}>{track}</p>
                    )             
                })}

      </TrackList>

      </Container>
      </>
    )
  }
  
  export default ProductHeader