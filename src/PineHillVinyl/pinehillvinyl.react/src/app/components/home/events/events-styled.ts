import styled from 'styled-components/macro'
import {colors} from '@styles/variables'


interface Props{
    side : string;
}

export const Container = styled.div`
height: 1200px;
background: ${colors.black};
`

export const Title = styled.div`
width: 500px;
margin-top: 100px;
margin-right: 80px;
display:flex;
flex-direction: column;
z-index:2;
span{
    color:white;
    z-index:10;
    font-size: 100px;
    text-align: center;
}


&::after{
     content:"";
     width: 100%;
     height: 150px;
     background-color: ${colors.red};
     transform: rotate(5deg);
     margin-top: -120px;

 }
`

export const TitleContainer = styled.div`
display: flex;
justify-content: flex-end;
`

export const Event = styled.div<Props>`
width: 80%;
height: 250px;
background-color: ${colors.white};
margin: 10px;
float: ${props => props.side};
background-image: url("../../../../../public/events/event1.jpg");

 img{
    height: 250px;
    object-fit: cover;
    -o-object-fit: cover;
 }
`