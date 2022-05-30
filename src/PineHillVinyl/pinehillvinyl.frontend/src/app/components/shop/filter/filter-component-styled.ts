import styled from 'styled-components/macro'
import {screens} from '@styles/variables'

export const Container = styled.div`
display: none;

@media ${screens.laptop} {
    display: initial;
}
`