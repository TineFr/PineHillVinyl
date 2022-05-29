import styled, {css} from 'styled-components/macro'
import {screens} from '@styles/variables'



const SharedStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid lightgrey;
margin: 10px 5px 10px 0;
padding: 20px;
box-sizing: border-box;
width: 100%;

@media ${screens.tablet} {
    grid-column-end: span 2;
}

`

export const Container = styled.div`
display:flex;
width: 100%;
justify-content: center;
align-items: center;
padding: 30px 20px;
`

export const Form = styled.form`
width: 100%;
max-width: 700px;


@media ${screens.tablet} {
    display:grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 7px;

}
`

export const Input = styled.input`
${SharedStyles}

`

export const InputSmall = styled.input`
${SharedStyles}
@media ${screens.tablet} {
grid-column-end: span 1;
}
`

export const TextArea = styled.textarea`
height: 200px !important;
${SharedStyles}

`