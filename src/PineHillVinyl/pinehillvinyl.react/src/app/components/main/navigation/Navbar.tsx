import { Component } from 'react';
import { NavbarItems } from './NavbarItems'
import { NavLink } from 'react-router-dom'
import './_navbar.scss';
import "../../../../src/assets/icons/logo.png";


class Navbar extends Component {
    render() {
        return (
            //<nav className="navBar">
            //    <div className="logoContainer">
            //        <img className="logo" src={require("../../../assets/icons/logo.png")}  alt="logo"/>
            //    </div>
            //    <ul>
            //        {NavbarItems.map((item, index) => {
            //            return (
            //                <li key={index}>
            //                    <a className={item.cName} href={item.url}>{item.title}</a>
            //                </li>
            //            )
            //        })}
            //    </ul>
            //</nav>




            <nav>


                <nav className="navBar">
                <div className="logoContainer">
                    <img className="logo" src={require("../../../assets/icons/logo.png")}  alt="logo"/>
                </div>
                <ul>
                    {NavbarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.url} className={((navData) => navData.isActive ? item.cName + "active" : item.cName)}>{item.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>


            </nav>
        );
    }
}

export default Navbar;