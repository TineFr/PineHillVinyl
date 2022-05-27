import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

export const SearchBox = styled.input`
  width: 80%;
  max-width: 500px;
  height: 3rem;
  padding-left: 20px;
  border-radius: 1.6rem;
  border: 2px solid black;
  outline: none;
`

export const Container = styled.div`
text-align: center;
background-color: ${colors.black};
height: 4rem;
position: fixed;
width: 100%;
margin-top: 75px;

@media ${screens.mobileL} {
margin-top: 0px;
position: initial;
}
  
`