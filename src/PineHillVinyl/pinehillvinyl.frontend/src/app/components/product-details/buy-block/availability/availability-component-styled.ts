import styled from 'styled-components'
import {screens} from '@styles/variables'
export const AvailabilityComponent = styled.div`

margin-right: 5rem;
border: 1px solid black;
font-size: 6vmin;
background-color: white;
font-family: 'onyx', sans-serif;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
height: 10vmin;
margin-top: 3px;
display: flex;
justify-content: flex-start;

@media ${screens.mobileL}{
    font-size: 4vmin;
    height: 7vmin;

}

@media ${screens.laptop}{
    font-size: 3vmin;
    height: 6vmin;

}


`

export const Node = styled.div`

background-color: lightgreen;
width: 0.4em;
height: 0.4em;
float: right;
border-radius: 50%;
margin: 0px 10px;

`


export const Container = styled.div`


`