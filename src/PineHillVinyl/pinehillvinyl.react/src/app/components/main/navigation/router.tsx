import React, { Component } from 'react';
import { BrowserRouter as Router, Routes , Route, NavLink } from 'react-router-dom' 
import ErrorPage from '../../../error';
import About from '../../about/about';
import Home from '../../home/home';


class router extends Component {
    render() {
        return (
         <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </Router>
        );
    }
}

export default router;