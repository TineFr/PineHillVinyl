import {Container, Title, PreOrder, ProductsWrapper, Product, MarqueeContainer} from './available-soon-styled'
import {Products as data} from '../../../../data/products'
import { useState, useEffect} from "react";
import Marquee from 'react-fast-marquee';



const AvailableSoon = () => {

  return (

    <Container data-aos="fade-up" data-aos-once="true">
        <Title><span>Coming Soon</span></Title>
        <PreOrder><span>Pre order now</span></PreOrder>
        <MarqueeContainer speed={60}> 
        <ProductsWrapper>
{data.map((item, index) => {
                    return (

            <Product key={index}>
                <img src={process.env.PUBLIC_URL + item.image}  loading="lazy"/>
                <h1>{item.artist}</h1>
                <h2>{item.name}</h2>
                <p>{item.releaseDate}</p>
            </Product>
                    )             
                })}
        </ProductsWrapper>
        </MarqueeContainer>
    </Container>
  )
}

export default AvailableSoon