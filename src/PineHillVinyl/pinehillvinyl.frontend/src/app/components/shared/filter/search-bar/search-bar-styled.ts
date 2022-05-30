import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'
import {VscSearch} from 'react-icons/vsc'

export const SearchBox = styled.input`
  width: 90%;
  border: none;

  &:focus, :active{
    outline: none;
  }
`

export const SearchBoxContainer = styled.div`
  width: 80%;
  max-width: 500px;
  height: 3rem;
  padding-left: 20px;
  border-radius: 1.6rem;
  border: 2px solid black;
  outline: none;
  background-color: ${colors.white};
  display:flex;
  align-items: center;
`
export const SearchIcon = styled(VscSearch)`
cursor: pointer;
`


export const Container = styled.div`
display: flex;
justify-content: center;
background-color: ${colors.black};
height: 4rem;
position: sticky;
top:75px;
left: 0;
width: 100%;
z-index: 200;


@media ${screens.laptop} {
margin-top: 0px;
position: initial;
}
  
`