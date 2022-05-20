import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'


interface Props{
    side : string;
}

export const Container = styled.div`
height: auto;
background: ${colors.black};
overflow:hidden;
padding-bottom: 70px;
`

export const TitleContainer = styled.div`
margin-bottom: 20px;

@media ${screens.laptop}{
display: flex;
justify-content: flex-end; 
}
`

export const Title = styled.div`
transform: rotate(3deg) !important;
width: 100%;
margin-top: 70px;
display:flex; 
justify-content: center;
align-items: center;
margin-left: -5px;
width: 110%;
height: calc(40px + 7vw);
background-color: ${colors.red};


@media ${screens.laptop}{
    width: 50%;
    margin-right: 60px;
}

 span{
    color:white;
    font-size: calc(30px + 4vw);
    text-align: center;
    transform: rotate(-3deg);
} 

`

export const Event = styled.div<Props>`
width: 80%;
height: calc(30px + 14vw);
background-color: ${colors.white};
margin: 10px;
float: ${props => props.side};


 img{
    height: 250px;
    object-fit: cover;
    -o-object-fit: cover;
 }
`