import styled from 'styled-components/macro'
import {FaSortAlphaDown} from 'react-icons/fa'
import {colors} from '@styles/variables'

interface Props {
    show : boolean
}

export const Container = styled.div`
grid-column-end: span 2;
display: flex;
align-items: flex-end;
justify-content: flex-end;
`

export const SortSelection = styled.select<Props>`
display: ${props => props.show ? "initial" : "none"};
height: 40px;
width: auto;
border: none;
outline:0px;
font-family: "onyx";
font-size: 3vmin;

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