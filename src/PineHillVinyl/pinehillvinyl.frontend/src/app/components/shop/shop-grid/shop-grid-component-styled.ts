import styled from 'styled-components/macro'
import {screens} from '@styles/variables'
export const Grid = styled.div`

display: flex;
flex-direction: column;

@media ${screens.laptop}{
display:grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: 100px auto;
margin: 0px 50px;

}
`