import styled from 'styled-components'
import {screens} from '@styles/variables'

export const Button = styled.button`
margin-right: 5rem;
border: 1px solid black;
font-size: 7vmin;
background-color: white;
font-family: 'onyx', sans-serif;
display: flex;
align-items: center;
justify-content: space-evenly;
cursor: pointer;
width: 100%;
height: 15vmin;

@media ${screens.mobileL}{
    font-size: 5vmin;
    height: 10vmin;

}

@media ${screens.laptop}{
    font-size: 4vmin;
    height: 8vmin;

}
`



