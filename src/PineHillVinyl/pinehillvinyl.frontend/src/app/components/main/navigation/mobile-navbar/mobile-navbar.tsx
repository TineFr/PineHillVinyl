
import { NavbarItems } from '../navbar-items'
import { NavLink } from 'react-router-dom'
import "../../../../../assets/icons/logo.png";
import { AiOutlineClose } from 'react-icons/ai';

function MobileNavbar (props : any) {

  return (
    <nav className={`navBar-mobile${props.show ? "" : " hidden"}`} onClick={props.toggle}>
    <div className="logoContainer-mobile">
        <img className="logo-mobile" src={require("../../../../../assets/icons/logo-transparent.png")}  alt="logo"/>
    </div>
    <ul className="navContainer-mobile">
        {NavbarItems.map((item, index) => {
            return (
                <li key={index}>
                    <NavLink to={item.url} className={`mobile ${item.cName}`} onClick={props.toggle}>{item.title}</NavLink>
                </li>
            )            
        })}
    </ul>
    <div className='gr-close-container'>
         <AiOutlineClose className="gr-close" onClick={props.toggle}/>
    </div>
</nav>


  )
}

export default MobileNavbar