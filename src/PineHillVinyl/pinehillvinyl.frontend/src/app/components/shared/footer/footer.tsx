import { NavLink } from 'react-router-dom';
import {Container, Column, Logo, Socials, Wrapper, Title} from './footer-styled'

const Footer = () => {

        return (
            <Container>
                <Wrapper>
                <Column>
                <Title>Information</Title>
                <NavLink to="/">Informatie</NavLink>
                <NavLink to="/">Informatie</NavLink>            
                <NavLink to="/">Informatie</NavLink>
                <NavLink to="/">Informatie</NavLink>             
                <NavLink to="/">Informatie</NavLink>                                       
                </Column>
                <Column>
                <Title>Information</Title>
                <NavLink to="/">Informatie</NavLink>
                <NavLink to="/">Informatie</NavLink>            
                <NavLink to="/">Informatie</NavLink>
                <NavLink to="/">Informatie</NavLink>             
                <NavLink to="/">Informatie</NavLink>                                       
                </Column>
                <Column>
                <Title>Information</Title>
                <NavLink to="/">Informatie</NavLink>
                <NavLink to="/">Informatie</NavLink>            
                <NavLink to="/">Informatie</NavLink>
                <NavLink to="/">Informatie</NavLink>             
                <NavLink to="/">Informatie</NavLink>                                       
                </Column>
                <Column>
                <Title>Information</Title>
                <NavLink to="/">Informatie</NavLink>
                <NavLink to="/">Informatie</NavLink>            
                <NavLink to="/">Informatie</NavLink>
                <NavLink to="/">Informatie</NavLink>             
                <NavLink to="/">Informatie</NavLink>                                       
                </Column>
                </Wrapper>
                <Logo>
                    <img src={require("../../../../assets/icons/logo-transparent.png")}></img>
                </Logo>
                <Socials></Socials>                
            </Container>
        );
    
}

export default Footer;