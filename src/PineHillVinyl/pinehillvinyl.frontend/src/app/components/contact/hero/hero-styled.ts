import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

export const Container = styled.div`

background-color: ${colors.black};
height: 1.5em;
color: ${colors.white};
display: flex;
align-items: flex-end;
justify-content: center;
font-size: 10rem;


@media ${screens.tablet} {
    font-size: 15rem;
}

@media ${screens.laptop} {
    font-size: 17rem;
    height: 1.1em;
}

`