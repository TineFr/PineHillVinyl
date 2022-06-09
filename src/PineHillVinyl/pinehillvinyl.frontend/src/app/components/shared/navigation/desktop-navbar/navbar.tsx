import { useState, useEffect } from 'react';
import { NavbarItems } from '../navbar-items'
import { NavLink } from 'react-router-dom'
import {NavbarContainer, LogoContainer, NavbarList, NavbarItem, BarsIcon, ClientContainer} from './navbar-styled'
import AccountButton from './account-button/account-button.component';
import CartButton from './cart-button/cart-button.component';


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
    <NavbarContainer $show={show} >
    <LogoContainer>
        <img src={require('../../../../../assets/icons/logo-transparent.png')} />
    </LogoContainer>
        <NavbarList>
        {NavbarItems.map((item, index) => {
                return (
                    <NavbarItem key={index}>
                        <NavLink to={item.url} className={((navData) => navData.isActive ? item.cName + " active" : item.cName)}>{item.title}</NavLink>
                    </NavbarItem>
                )             
                    })}
        </NavbarList>
        <ClientContainer>
            <AccountButton isLogged={localStorage.getItem("logged")}></AccountButton>
            <CartButton></CartButton>
        </ClientContainer>
    </NavbarContainer>
    <BarsIcon $show={show} onClick={props.toggleBars}/>
    </>
    );

}

export default Navbar;