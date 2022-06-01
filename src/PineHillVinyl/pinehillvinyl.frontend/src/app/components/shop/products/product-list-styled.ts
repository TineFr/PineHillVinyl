import styled from 'styled-components/macro'
import {colors, screens} from '../../../../styles/variables'


export const ProductsContainer = styled.div`
display: flex;
/* align-items: center; */
/* justify-content: center; */
overflow: hidden;
width:100%;
`

export const ProductsWrapper = styled.div`
display: Grid;
margin-top: 10px;
grid-template-columns: repeat(2, 50%);
grid-row-gap: 20px;
justify-content: flex-end;

@media ${screens.laptop}{
  grid-template-columns: repeat(5, 18%);
 } 
`

