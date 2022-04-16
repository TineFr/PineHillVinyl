import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom' 
import ErrorPage from '../../../error';
import About from '../../about/about';
import Contact from '../../contact/contact';
import Home from '../../../pages/home';
import Shop from '../../../pages/shop';
import Navbar from './desktop-navbar/navbar';
import MobileNavbar from './mobile-navbar/mobile-navbar';


function RouterComponent() {

    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggle = () =>{
        setShowMobileNav(!showMobileNav);
    }

    const handleResize = () =>{
        console.log({showMobileNav});
        if (window.innerWidth >= 700 && showMobileNav){
            toggle();
        };
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
      });

    

        return (
         <Router>
             {/* <MobileNavbar toggle={toggle} show={showMobileNav}/> */}
             <Navbar toggleBars={toggle}/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </Router>
        );

}

export default RouterComponent;