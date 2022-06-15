import styled from 'styled-components/macro'
import {colors, screens} from '../../../../styles/variables'
import { Link } from 'react-router-dom'

export const ProductsContainer = styled.div`
display: flex;
overflow: hidden;
width:100%;
position: relative;
`


export const ProductsWrapper = styled.ul`
display: Grid;
margin-top: 10px;
grid-template-columns: repeat(2, 1fr);
grid-row-gap: 30px;
grid-column-gap: 10px;
justify-content: flex-end;

@media ${screens.tablet}{
  grid-template-columns: repeat(3, 1fr);
 } 

@media ${screens.laptop}{
  grid-template-columns: repeat(5, 1fr);
 } 
`

