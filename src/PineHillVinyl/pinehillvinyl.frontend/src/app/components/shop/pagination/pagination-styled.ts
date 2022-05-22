import styled from 'styled-components/macro'
import {colors, screens} from '../../../../styles/variables'


export const Container = styled.ul`
height: 200px;
display: flex;
margin:auto;
flex-direction: row;
justify-content: center;
align-items: center;
`

export const PageButton = styled.li`

list-style: none;
background-color: white;
cursor: pointer;

    svg{
        font-size: calc(15px + 2vw);
        color: ${colors.red};
        margin-top: 3px;
    }

    button{
    width: 10vw;
    height:10vw;
    max-width: 50px;
    max-height: 50px;
    border: 1px solid lightgrey;  
    background-color: ${colors.white};
    color: ${colors.black};
    }
`



