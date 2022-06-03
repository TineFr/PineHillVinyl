import styled from 'styled-components/macro'
import {screens} from '@styles/variables'

export const Container = styled.div`
display:flex;
justify-content: flex-end;
align-items: flex-end;
`

export const Wrapper = styled.div`
width: 40vmin;
margin: 1rem;
margin-top: 10px;
max-width: 270px;

@media ${screens.laptop}{
    margin: 4rem;

}

`