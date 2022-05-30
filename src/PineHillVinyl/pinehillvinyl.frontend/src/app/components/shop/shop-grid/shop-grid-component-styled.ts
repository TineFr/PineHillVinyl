import styled from 'styled-components/macro'
import {screens} from '@styles/variables'
export const Grid = styled.div`

display: flex;
flex-direction: column;
margin: 0.5em;


@media ${screens.laptop}{
display:grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: auto auto;
margin: 0px 50px;

}
`