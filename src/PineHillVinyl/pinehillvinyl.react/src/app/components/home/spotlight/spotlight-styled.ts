import styled from 'styled-components/macro'
import {colors} from '@styles/variables'

export const Container = styled.div`
margin-top: 30px;
font-family: "onyx";
`

export const Title = styled.div`

font-size: 7em;
text-align: center;
display: flex;
flex-direction: column;
color: #151515;

span{
    z-index:3;
}

&::after{
     content:"";
     width: 400px;
     height: 17px;
     background-color: ${colors.red};
     margin: auto;
     transform: translate(100px) rotate(-1.3deg);
     margin-top: -30px;
 }

`
export const ProductsWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 300px;
padding: 40px;
margin-top: 30px;
flex-wrap: nowrap;
overflow: hidden;
`

export const Product = styled.div`
width: 250px;
height: 300px;
margin: 20px; 
position: relative;

 img{
     width: 100%;
     object-fit: cover;
    } 

 h1{
     position: absolute;
     top: 0;
     margin-left: 3px;
     opacity: 0;
 }

 p{
     text-align: center;
     opacity: 0;
     position: absolute;
     margin-left: auto;
     margin-right: auto;
     margin-top: 40%;
     left: 0;
     right: 0;
     top: 0;
     font-size:40px;

 }

 &:hover img{
     opacity: 0.5;
 }

 &:hover h1{
     opacity: 1;
 }

 &:hover p{
     opacity: 1;
 }

`