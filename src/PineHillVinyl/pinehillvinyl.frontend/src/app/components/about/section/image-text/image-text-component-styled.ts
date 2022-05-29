import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

interface SectionProps{
    position: string
    imageFirst: boolean;
}

interface ContentProps{
    position: string
}

interface ImageProps{
    src: string
}


export const Section = styled.section<SectionProps>`
display:flex;
flex-direction: ${props => props.imageFirst ? 'column-reverse' : 'column'};

justify-content: center;
margin: 3em auto;
gap: 20px;
width: 80%;



@media ${screens.laptop} {
    justify-content: ${props => props.position};
    flex-direction: ${props => props.imageFirst ? 'row-reverse' : 'row'};
}
`

export const Wrapper = styled.div`
    max-width: 600px;
`

export const Title = styled.h1<ContentProps>`
color: ${colors.red};
font-size: 9vmin;
/* text-align: ${props => props.position}; */

`

export const Message = styled.div<ContentProps>`
font-size: 3.2vmin;
/* text-align: ${props => props.position}; */
`

export const Image = styled.div`
max-width: 500px;
img{
    width: 100%;
    object-fit: cover;
}
`