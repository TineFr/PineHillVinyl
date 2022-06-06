import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'
import { Link } from 'react-router-dom'

export const ProductsItem = styled(Link)`
display: flex;
flex-direction: column;
height: auto;
width: 90%;
cursor: pointer;
text-decoration: none;
`
export const ImageContainer = styled.div`
width: 100%;

  img{
      width: 100%;
      object-fit: cover;
  }
`
export const InfoContainer = styled.div`

background: ${colors.black};
height: calc(50px + 4vw);
width: 100%;
color: white;
text-align: start;
padding-left: 5px;
margin-top: 5px;

@media ${screens.laptop}{
  height: 60px;
 } 


h1, h2{
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    font-weight: normal;

}

h1{
  font-size: calc(4px + 5vw);

  @media ${screens.laptop}{
    font-size: calc(10px + 1vw);
 } 
}
`
