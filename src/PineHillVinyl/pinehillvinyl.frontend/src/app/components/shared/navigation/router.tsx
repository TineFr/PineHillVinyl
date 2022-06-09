import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom' 
import {Home, Contact, About, ProductDetails, Shop, Authentication, Account, CartPage} from '../../../pages'

import ScrollBack from './scroll-back';
import ErrorPage from '../../../error';
import Navbar from './desktop-navbar/navbar';
import SideNavBar from './side-navbar/side-navbar';
import Footer from '../../shared/footer/footer';



function RouterComponent() {


    const [showMenu, setShowMenu] = useState(false);


    const toggle = () =>{
        setShowMenu(!showMenu);
    }
        return (
         <Router>
             <SideNavBar show={showMenu} toggle={toggle}/>
             <Navbar toggleBars={toggle}/>
             <ScrollBack>
            <Routes>  
                <Route path="/" element={<Home/>}></Route>
                <Route path="/checkout" element={<CartPage/>}></Route>
                <Route path="/login" element={<Authentication/>}></Route>
                <Route path="/account" element={<Account/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/product/:id" element={<ProductDetails/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes> 
            <Footer/>         
            </ScrollBack>
     
        </Router>
        );

}

export default RouterComponent;