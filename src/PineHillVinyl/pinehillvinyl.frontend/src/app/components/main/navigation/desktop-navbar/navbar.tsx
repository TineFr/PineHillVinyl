import { useState, useEffect } from 'react';
import { NavbarItems } from '../navbar-items'
import { NavLink } from 'react-router-dom'
import {NavbarContainer, LogoContainer, NavbarList, NavbarItem, BarsIcon} from './navbar-styled'


function Navbar(props : any) {

    const [show, setShow] = useState(true);
    const handleShow = () =>{
        if (window.pageYOffset >= 20){
            setShow(false);
        } 
        else {
            setShow(true);
        }
    }

    useEffect( () =>{

        window.addEventListener("scroll", handleShow );

    }, []);

        return (
            <>
    <NavbarContainer show={show} >
    <LogoContainer>
        <img src={require('../../../../../assets/icons/logo-transparent.png')} />
    </LogoContainer>
        <NavbarList isMobile={props.isMobile}>
        {NavbarItems.map((item, index) => {
                return (
                    <NavbarItem key={index}>
                        <NavLink to={item.url} className={((navData) => navData.isActive ? item.cName + " active" : item.cName)}>{item.title}</NavLink>
                    </NavbarItem>
                )             
                    })}
        </NavbarList>
    </NavbarContainer>
    <BarsIcon show={show} isMobile={props.isMobile} onClick={props.toggleBars}/>
    </>
    );

}

export default Navbar;