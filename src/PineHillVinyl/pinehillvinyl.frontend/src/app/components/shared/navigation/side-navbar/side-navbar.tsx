
import { Container, CloseButton, NavContainer, NavItems, NavItem, LogoContainer  } from './side-navbar-styled';
import { NavbarItems } from '../navbar-items'
import { NavLink } from 'react-router-dom'

function SideNavbar (props : any) {

  return (
      <>
      <Container show={props.show}>
      <CloseButton onClick={props.toggle}/>
      <NavContainer>
          <NavItems>
          {NavbarItems.map((item, index) => {
                return (
                    <NavItem key={index}>
                        <NavLink  onClick={props.toggle} to={item.url} className={((navData) => navData.isActive ? item.cName + " active" : item.cName)}>{item.title} </NavLink>
                    </NavItem>
                )             
                    })}
        </NavItems>
      </NavContainer>
      <LogoContainer>
        <img src={require('../../../../../assets/icons/logo-transparent.png')} /></LogoContainer>
      </Container>
      </>
  )
}

export default SideNavbar

