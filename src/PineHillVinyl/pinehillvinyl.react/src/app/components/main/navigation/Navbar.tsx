import { Component, useState } from 'react';
import { NavbarItems } from './navbar-items'
import { NavLink } from 'react-router-dom'
import './_navbar.scss';
import "../../../../assets/icons/logo.png";


class Navbar extends Component {
    render() {
        return (
            <nav className="navBar">
            <div className="logoContainer">
                <img className="logo" src={require("../../../../assets/icons/logo.png")}  alt="logo"/>
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
}

export default Navbar;