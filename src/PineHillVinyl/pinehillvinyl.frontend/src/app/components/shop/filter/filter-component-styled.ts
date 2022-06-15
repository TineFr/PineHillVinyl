import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

export const Container = styled.div`
display: none;
padding-left: 50px;


h1{
    border-bottom: 1px solid black;
    width: 80%;
    padding: 5px;
}

@media ${screens.laptop} {
    display: initial;
}
`

export const List = styled.div`

`


export const Genre = styled.div`
font-size:1.4rem;
cursor: pointer;
color: ${colors.black};
padding: 3px;
&:hover{
    margin-left: 10px;
    color: ${colors.red};
    transition: all ease-in 0.2s;   
}

`