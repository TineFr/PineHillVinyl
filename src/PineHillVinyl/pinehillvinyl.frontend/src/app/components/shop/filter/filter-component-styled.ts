import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

export const Container = styled.div`
display: none;


h1{
    text-decoration: underline;
}

@media ${screens.laptop} {
    display: initial;
}
`

export const List = styled.div`

`


export const Genre = styled.div`

`