import React, { Component } from 'react';
import Footer from '../main/footer/footer';
import Hero from './hero/hero-compontent';
import { NewestArrivals } from './spotlight/spotlight';
import './home.scss';
import AvailableSoon from './available-soon/available-soon';

function Home() {
    return (
        <div className='mountains-background'>   
        <Hero/>
        <AvailableSoon/>
        <NewestArrivals/>
        <Footer/>
        </div>
    );
}

export default Home;