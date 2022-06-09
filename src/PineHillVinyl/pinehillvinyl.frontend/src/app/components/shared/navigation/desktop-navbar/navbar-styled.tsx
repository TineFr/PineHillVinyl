import { RoomSharp } from '@material-ui/icons'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components/macro'
import {colors, screens} from '../../../../../styles/variables'


interface Props{
  $show? : boolean
}


export const NavbarContainer = styled.div<Props>`
position:  "sticky" ;
top: 0;
left: 0;
background-color: ${colors.black};
align-items: center;
justify-content: flex-start;
height: 75px;
width: 100%;
z-index: 999;
display:flex;
justify-content: space-around;

@media ${screens.tablet}{
    position: "initial";
    padding: 0px 20px;  
}


`

export const LogoContainer = styled.div`
height: 75px;
padding-right: 7vmin;

 img{
     height: 80px;
     object-fit: cover;
 }


 @media ${screens.laptop}{
     grid-column: 1;

}

`

export const NavbarList = styled.div<Props>`
display: none;
justify-content: center;
align-items: center;
width: 700px;
gap: 40px;
overflow:hidden;

@media ${screens.laptop} {
    display: flex;
    
}

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

 @media ${screens.laptop}{
     grid-column: 2;

}
`

export const BarsIcon = styled(FaBars)<Props>`
color: ${colors.red};
font-size: 30px;
position: fixed;
right: 0;
top: 0;
margin: 20px;
transition: all 0.2s ease-in-out;
z-index: 999;

@media ${screens.laptop}{
    opacity: ${props =>  props.$show ?  0 : 1};

}

`

export const ClientContainer = styled.div`
display:flex;
width: 100px;
justify-content: space-around;
padding-right: 70px;
gap: 5px;
`