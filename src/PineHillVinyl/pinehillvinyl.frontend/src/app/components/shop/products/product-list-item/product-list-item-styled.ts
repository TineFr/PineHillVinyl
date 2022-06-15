import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'
import { Link } from 'react-router-dom'

export const ProductItem = styled.li`

width: auto;
flex-grow: 1;
list-style-type: none;
opacity: 0.95;
&:hover{
  opacity: 1;
}
`

export const ProductLink = styled(Link)`
text-decoration: none;
display: flex;
flex-direction: column;
cursor: pointer;
flex-grow: 1;
`
export const ImageContainer = styled.div`

  img{
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
  }
`
export const InfoContainer = styled.div`

background: ${colors.black};
flex-grow: 1;
margin-top: 3px;
padding: 0.66667rem;
padding-top: 1rem;
color: white;
max-width: 100%;
height: 100%;





/* @media ${screens.laptop}{
  max-width: 75%/ 5;
 }  */

 h1{

    font-size: 1.3rem;
} 
h2{
  font-size: 1.1rem;
}

/* h1{
  font-size: calc(4px + 5vw);

  @media ${screens.laptop}{
    font-size: calc(10px + 1vw);
 }  */

`

export const PriceContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
`
