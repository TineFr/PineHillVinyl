import React, { Component } from 'react';
import Footer from '../main/footer/footer';
import Hero from './hero/hero-compontent';
import { NewestArrivals } from './newest-arrivals/newest-arrivals';
import Test from './test/test';
import './home.scss';

function Home() {
    return (
        <div className='mountains-background'>   
        <Hero/>
        {/* <NewestArrivals/> */}
        <Test/>
        <Footer/>
        </div>
    );
}

export default Home;