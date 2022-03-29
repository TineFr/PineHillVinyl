import React, { Component } from 'react';
import { BrowserRouter as Router, Routes , Route, NavLink } from 'react-router-dom' 
import ErrorPage from '../../../error';
import About from '../../about/about';
import Contact from '../../contact/contact';
import Home from '../../home/home';
import Shop from '../../shop/shop';
import Navbar from './navbar';



class RouterComponent extends Component {
    render() {
        return (
         <Router>
             <Navbar/>
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
}

export default RouterComponent;