import styled from 'styled-components/macro'
import {colors, screens} from '../../../../styles/variables'


interface Props{
    side : string;
}

interface DateProps{
    color: string;
    left : boolean;
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

export const Date = styled.span<DateProps>`
background-color: ${props => props.color};
position: absolute;
padding: 5px 10px;
left: ${props => props.left ? 80  : 10 }%;
top: 40%;
display:flex;
align-items: center;
color: ${colors.white};
font-size: 6vmin;


`

export const Event = styled.div<Props>`
width: 80%;
height: calc(30px + 14vw);
background-color: ${colors.white};
margin: 10px;
float: ${props => props.side};
position: relative;

 img{
    height: 100%;
    width: 100%;
 }
`