import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

export const Container = styled.div`

width: 80%;
margin: auto;
padding: 1rem 0.2rem;


&.right-panel{
   border-top: 2px solid ${colors.red};
}

@media ${screens.laptop} {
width: 50%;
height: auto;
margin: 5rem 0rem;
padding-right:50px;


&.right-panel{
   padding-left:50px; 
   padding-right:0px;
   border-left: 2px solid ${colors.red};
   border-top: 0px;
}
}

`
export const FormGroup = styled.div`
margin: 2rem 0rem;
`

export const Form = styled.form``

export const Input = styled.input`
width: 70%;
height: 2.2rem;
border: 1px solid ${colors.red};
padding: 0rem 1rem;
caret-color: ${colors.red};
&:focus{
    outline: none;
}
`

export const Label = styled.label`
width: 30%;
float: left;
font-size: 1.4rem;
`

export const Submit = styled.button`
background-color: ${colors.red};
border: none;
padding: 1rem 2rem;
margin-top: 1rem;
font-size: .9rem;
letter-spacing: .1em;
line-height: 1;
color:  ${colors.white};
cursor: pointer;

`

export const Title = styled.h1`
font-size: 3rem;
letter-spacing: .05em;
`