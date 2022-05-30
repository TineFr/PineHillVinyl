import { RoomSharp } from '@material-ui/icons'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components/macro'
import {colors} from '../../../../../styles/variables'


interface Props{
  $show? : boolean
  $isMobile? : boolean
}


export const NavbarContainer = styled.div<Props>`
position: ${props => props.$isMobile ?  "sticky" : "initial"};
top: 0;
left: 0;
background-color: ${colors.black};
align-items: center;
justify-content: flex-start;
height: 75px;
width: 100%;
z-index: 999;
/* transition: all 0.1s ease-in-out; */

`

export const LogoContainer = styled.div`
height: 75px;
position: absolute;
top: 0;
left: 0;
 img{
     height: 80px;
     object-fit: cover;
 }
`

export const NavbarList = styled.div<Props>`
display: ${props => props.$isMobile  ?  "none" : "flex"};
/* display: flex; */
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
opacity: ${props =>  props.$isMobile || !props.$show ?  1 : 0};
margin: 20px;
transition: all 0.2s ease-in-out;
z-index: 999;
`