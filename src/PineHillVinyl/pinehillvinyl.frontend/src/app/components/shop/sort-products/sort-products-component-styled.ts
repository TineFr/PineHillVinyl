import styled from 'styled-components/macro'
import {FaSortAlphaDown} from 'react-icons/fa'
import {colors} from '@styles/variables'
import {screens} from '@styles/variables'


export const Container = styled.div`
grid-column-end: span 2;
display: flex;
align-items: flex-end;
justify-content: flex-end;
position: sticky;
top: 120px;
place-self: end;
z-index: 20;
width: 100%;
background-color: white;
@media ${screens.tablet}{
    position: initial;
}
`

export const SortSelection = styled.select`
width: auto;
border: none;
outline:0px;
font-family: "onyx";
font-size: 3.2vmax;
@media ${screens.laptop}{
    font-size: 1.7vmax;
}

& :focus, :active{
    border: none;   
    outline:0px;
}

`

export const SortIcon = styled(FaSortAlphaDown)`
color: ${colors.red};
height: 80px;
    width: 20px;

`