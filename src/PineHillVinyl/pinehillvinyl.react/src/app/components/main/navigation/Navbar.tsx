import { useState, useEffect } from 'react';
import { NavbarItems } from './navbar-items'
import { NavLink } from 'react-router-dom'
import './_navbar.scss';
import "../../../../assets/icons/logo.png";


function Navbar() {

    
        const [darkBackground, setDarkBackGround] = useState(false);
        const changeBackground = () =>{
            if(window.scrollY >= 75){
                setDarkBackGround(true);
            } else setDarkBackGround(false);
        }
        useEffect(() => {
            window.addEventListener('scroll', changeBackground)
        }, [])
        return (
            <nav data-color='' className={`navBar${darkBackground ? " dark" : ""}`}>
            <div className="logoContainer">
                <img className="logo" src={require("../../../../assets/icons/logo-transparent.png")}  alt="logo"/>
            </div>
            <ul className="navContainer">
                {NavbarItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item.url} className={((navData) => navData.isActive ? item.cName + " active" : item.cName)}>{item.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );

}

export default Navbar;