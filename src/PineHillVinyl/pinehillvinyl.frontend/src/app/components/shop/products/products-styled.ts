import styled from 'styled-components/macro'
import {colors, screens} from '../../../../styles/variables'


export const ProductsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
width:100%;
margin: 20px 0px 30px 0px;
`

export const ProductsWrapper = styled.div`
display: Grid;
margin-top: 10px;
width: 90%;
max-width: 2000px;
grid-template-columns: repeat(2, 50%);
text-align: center;
grid-row-gap: 20px;
margin:auto;
justify-content: center;

@media ${screens.laptop}{
  grid-template-columns: repeat(5, 18%);
 } 
`
export const ProductsItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
height: auto;
width: 90%;
cursor: pointer;
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

