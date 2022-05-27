import styled, {keyframes, css} from 'styled-components/macro'
import { AiOutlineClose } from 'react-icons/ai';
import { colors } from '@styles/variables';
import {MenuButton} from '../../../shared/buttons/menu-button-styled'


interface Props{
    show: boolean
}

const slideIn = keyframes`
  from {
    transform: translate(100vw);
  }

  to {
    transform: translate(0);
  }
`

export const Container = styled.div<Props>`
background-color: ${colors.black};
font-size: 7rem;
position: fixed;
width: 100%;
height: 100%;
z-index: 1050;
display: ${props => props.show ? 'table' : 'none'};
flex-direction: column;
animation: ${props => props.show ?  css`
          ${slideIn} 0.3s linear forwards
        `  : ''};
`

export const CloseButton = MenuButton.withComponent(AiOutlineClose);


export const NavContainer = styled.div`
width: 100%;
height: 70%;
display: table-row;
text-align: center;
`

export const NavItems = styled.div`
display:flex;
flex-direction: column;
margin-top: 2rem;
height: 100%;
justify-content: space-evenly;

`

export const NavItem = styled.a`
z-index: 1051;
color: white;
display:block;

a{
    color:${colors.white};
    text-decoration: none;
    &:hover{
    text-decoration: underline 5px solid ${colors.white};
    text-underline-offset: 0.2em;
 } 
}

`

export const LogoContainer = styled.div`
display: table-row;
width: 100%;
text-align: center;
height: 30%;
position: relative;

img{
    position: absolute;
    bottom: 0; 
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    height: 10rem;
}


`

