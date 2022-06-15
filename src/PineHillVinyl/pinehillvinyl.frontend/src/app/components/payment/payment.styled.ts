import styled from 'styled-components'
import {colors} from '@styles/variables'
export const Container = styled.div`
margin: auto;
display:flex;
width: 40%;
justify-content: center;
flex-direction: column;
height: 50vh;
`

export const CardContainer = styled.div`

display:flex;
justify-content: center;
flex-direction: column;
height: 5rem;

`


export const Label = styled.label`

display:flex;
justify-content: center;
flex-direction: column;
height: 5rem;
font-size: 3rem;

`

export const Button = styled.button`

width: 100%;
background-color: ${colors.red};
height: 30px;
color: white;
border: none;
`