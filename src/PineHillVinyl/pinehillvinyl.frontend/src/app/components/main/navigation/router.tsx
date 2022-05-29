import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom' 
import ScrollBack from './scroll-back';
import ErrorPage from '../../../error';
import About from '../../about/about';
import Contact from '../../../pages/contact';
import Home from '../../../pages/home';
import Shop from '../../../pages/shop';
import ProductDetails from '../../../pages/product-details';
import Navbar from './desktop-navbar/navbar';
import SideNavBar from './side-navbar/side-navbar';


function RouterComponent() {

    const [isMobile, setIsMobileNav] = useState(false);
    const [showMenu, setShowMenu] = useState(false);


    const toggle = () =>{
        setShowMenu(!showMenu);
    }

    const handleResize = () =>{
        if (window.innerWidth >= 700){
            setIsMobileNav(false);
             }
            else {
                setIsMobileNav(true);
            }
        };

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        window.addEventListener("load", handleResize)
      });


        return (
         <Router>
             <SideNavBar show={showMenu} toggle={toggle}/>
             <Navbar isMobile={isMobile} toggleBars={toggle}/>
             <ScrollBack>
            <Routes>  
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/products" element={<ProductDetails/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>          
            </ScrollBack>
     
        </Router>
        );

}

export default RouterComponent;