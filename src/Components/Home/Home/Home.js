import React from 'react';
import About from '../About/About';
import Faq from '../Faq/Faq';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const Home = () => {
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <About/>
            <Faq/>
            <Footer/>
        </>
    );
};

export default Home;