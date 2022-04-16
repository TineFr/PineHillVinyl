import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

interface Props{

    tagBGC : string;
}

export const Container = styled.div`
height: 65vh;
width: 100%;
background-color: ${colors.black};
position: relative;
transition: all 0.3s ease-in;
display:flex;
align-items: space-between;
flex-direction: column;

    @media ${screens.mobileS}{
            height: 80vh;
    }

    @media ${screens.laptop}{
        height: 100vh;
    }
`

export const Title = styled.h1`
color: ${colors.red};
font-size:calc(19px + 18vw);
font-weight: normal;
text-align: center;

    @media ${screens.laptop}{
        position: absolute;
        bottom: 0;
        margin-left: 50px;
        text-align: start;
    }
`

export const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: flex-end; 
height: 80%; 

@media ${screens.laptop}{
    margin-bottom: -240px;
}
`

export const Circle = styled.div`
width: 80vw;
aspect-ratio: 1 / 1;
border-radius: 50%;
background-color: ${colors.grey};
transition: all 0.3s ease-in;
max-width: 400px;
position: relative;
object-fit: contain;
    @media (max-height: 750px){
        max-width: 300px;
    }

    @media ${screens.laptop} and (min-height: 700px){
        max-width: 500px;
        margin-left: 250px; 
    }

    @media ${screens.laptop} and (min-height: 900px){
        max-width: 600px;
        margin-left: 300px; 
    }

    @media ${screens.desktop}{
        max-width: 830px;
    }

`
export const Tags = styled.div`
display:none;

    @media ${screens.laptopL}{
        display: flex;
        flex-direction: column;
        position: absolute;
        right: -40%;
        transform: skew(.600rad);
        text-align: center;
        transition: all 0.3s ease-in;
        float:right;
    }
`
export const Tag = styled.div<Props>`
color: white;
transform: skew( -.600rad);
font-size:calc(10px + 1vw); 
margin-bottom: 10px;
display:flex;
flex-direction: column;

    span{
        z-index:3;
        margin-left: 40px;
        font-size: 35px;
    }
    &::after{
     content:"";
     height: 35px;
     margin-left: 20px;
     width: 12vw;
     margin-top: -27px;
     margin-bottom: 20px;
     background-color: ${props => props.tagBGC};
     transform: rotate(5deg);
    }
`