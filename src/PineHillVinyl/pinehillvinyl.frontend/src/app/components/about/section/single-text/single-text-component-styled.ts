import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

interface Props{
    position: string
}


export const Section = styled.section<Props>`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 3em auto;
width: 80%;

@media ${screens.laptop} {
    align-items: ${props => props.position};
}
`

export const Wrapper = styled.div`
    max-width: 600px;
`

export const Title = styled.h1<Props>`
color: ${colors.red};
font-size: 9vmin;
text-align: ${props => props.position};

`

export const Message = styled.div<Props>`
font-size: 3.2vmin;
text-align: ${props => props.position};
`