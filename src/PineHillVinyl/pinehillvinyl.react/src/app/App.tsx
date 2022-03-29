import React from 'react';
import { BrowserRouter as Router, Routes , Route, NavLink } from 'react-router-dom' 
import './App.css';
import '../styles/_base.scss';
import Home from "./components/home/home";
import About from "./components/about/about";
import ErrorPage from "./error"
function App() {
    return (
        <Router>
            <nav>
                <NavLink to="" className={((navData) => navData.isActive ? "nav-main active" : "nav-main")}>Home</NavLink>
                <NavLink to="/about" className="main-nav">About</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
