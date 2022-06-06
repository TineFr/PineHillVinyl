import styled, {keyframes} from 'styled-components/macro'
import {colors, screens}  from '@styles/variables'

interface Props{

    tagBGC? : string;
    imageSource? : string;
    delay?: number;
    loaded? : boolean
}

const vinylAnimation = keyframes`
  from {
   -webkit-transform:rotate(60deg);
   -moz-transform:rotate(60deg);
   -o-transform:rotate(60deg);
   opacity:0
  }

  to {
   -webkit-transform:rotate(360deg);
   -moz-transform:rotate(360deg);
   -o-transform:rotate(360deg);
   opacity:1
  }
`;

export const Container = styled.div`
height: 60vh;
min-height:300px;
width: 100%;
background-color: ${colors.black};
position: relative;
display:flex;
align-items: space-between;
flex-direction: column;

 @media ${screens.tablet}{
    height: 90vh;
 }

`

export const Title = styled.h1`
color: ${colors.red};
font-size:calc(19px + 18vw);
font-weight: normal;
text-align: center;
bottom: 0;
position: absolute;
width: 100%;
    @media ${screens.laptop}{
        margin-left: 50px;
        text-align: start;
    }
`

export const Letter = styled.span<Props>`
display: inline-block;
transition: opacity 1s; 
transition-delay: ${props => props.delay}s;
opacity: ${props => props.loaded ? 1 : 0};
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
max-width: 400px;
position: relative;
object-fit: contain;
background:  linear-gradient(30deg, transparent 40%, rgba(42, 41, 40, .85) 40%) no-repeat 100% 0, linear-gradient(60deg, rgba(42, 41, 40, .85) 60%, transparent 60%) no-repeat 0 100%, repeating-radial-gradient(#2a2928, #2a2928 4px, #ada9a0 5px, #2a2928 6px);
background-size: 50% 100%, 100% 50%, 100% 100%;
animation: ${vinylAnimation} 1s linear;

&::after{
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -35px;
    border: solid 1px #d9a388;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${colors.red}, inset 0 0 0 27px ${colors.red};
    background:${colors.grey};
    content: '';
}


&::before{
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${colors.black}, inset 0 0 0 27px ${colors.black};
    background:${colors.black};
    content: '';
}
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
color: ${colors.white};
transform: skew( -.600rad);
font-size:calc(10px + 1vw); 
margin-bottom: 10px;
display:flex;
flex-direction: column;

transition: opacity 1s; 
transition-delay: ${props => props.delay}s;
opacity: ${props => props.loaded ? 1 : 0};

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