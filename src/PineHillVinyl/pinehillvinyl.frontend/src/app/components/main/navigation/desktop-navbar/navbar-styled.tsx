import { FaBars } from 'react-icons/fa'
import styled from 'styled-components/macro'
import {colors} from '../../../../../styles/variables'


interface Props{
  show : boolean
}


export const NavbarContainer = styled.div<Props>`
display: flex;
opacity: ${props => props.show ?  1 : 0};
background-color: ${colors.black};
align-items: center;
justify-content: flex-start;
height: 75px;
width: 100%;
z-index: 999;
transition: all 0.4s ease-in-out;

`

export const LogoContainer = styled.div`
height: 75px;
position: fixed;
top: 0;
left: 0;
 img{
     height: 80px;
     object-fit: cover;
 }
`

export const NavbarList = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 40px;
overflow:hidden;
`
export const NavbarItem = styled.div`
margin: 10px;
a{
    color:${colors.white};
    text-decoration: none;
    font-size: 1.7rem;
}
 &:hover{
     text-decoration: underline;
     text-underline-offset: 0.5em;
 }
`

export const BarsIcon = styled(FaBars)<Props>`
color: ${colors.red};
font-size: 30px;
position: fixed;
right: 0;
top: 0;
opacity: ${props => props.show ?  0 : 1};
margin: 20px;
transition: all 0.5s ease-in-out;
z-index: 999;
`