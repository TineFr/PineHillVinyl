
import { Container, CloseButton, NavContainer, NavItems, NavItem, LogoContainer  } from './mobile-navbar-styled';


function MobileNavbar (props : any) {

  return (
      <>
      <Container show={props.show}>
      <CloseButton onClick={props.toggle}/>
      <NavContainer>
          <NavItems>
            <NavItem>Home</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact</NavItem>
        </NavItems>
      </NavContainer>
      <LogoContainer>
        <img src={require('../../../../../assets/icons/logo-transparent.png')} /></LogoContainer>
      </Container>
      </>
  )
}

export default MobileNavbar

