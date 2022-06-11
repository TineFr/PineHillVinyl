import styled from 'styled-components/macro'
import {screens} from '@styles/variables'

export const Grid = styled.div`
display:flex;
flex-direction: column;


@media ${screens.laptop}{
    flex-direction: row;
    width: 60%;
    margin:auto;
    padding: 20px;
} 

`