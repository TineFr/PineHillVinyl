import styled from 'styled-components/macro'
import {screens} from '@styles/variables'

export const Wrapper = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;


@media ${screens.laptop}{
width: 90%; 
margin: 50px 0px;
flex-direction: row;
align-items: flex-start;
}
`


export const Map = styled.div`
width: 200px;
height: 200px;

@media ${screens.tablet}{
width: 400px;
height: 400px;
}

display: flex;
align-items: center;
justify-content: center;
margin: 20px 70px;


iframe{
    width: 100%;
    height: 100%;
    border: none;
}

`


export const Information = styled.div`


`


export const Container = styled.div`
h1{
    font-size: 4rem;
}

`