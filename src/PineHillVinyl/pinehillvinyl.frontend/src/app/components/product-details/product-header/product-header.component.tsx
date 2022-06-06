import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../../models/interfaces';
import {Container, Header, Artist, Title, ImageContainer, ProductDetails, Price, Description, Specifications,TrackList, Test} from './product-header.styled'

const ProductHeader = () => {
  const [product, setProduct] = useState<Product>();
  let { id } = useParams();
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  useEffect( () =>{
    axios.get<Product>("http://localhost:5000/api/v1/products/" + id)
    .then(res => {
      setProduct(res.data);
    })
    .catch((err) => {
    });;
  }, [])
  
    return (
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
    )
  }
  
  export default ProductHeader