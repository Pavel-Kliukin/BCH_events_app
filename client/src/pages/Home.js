import React from 'react';
import style from './Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <div className={style.layout}>
            <Header />
            <div className={`${style.homeApp}`}>
                This is Homepage
            </div>
            <Footer />

        
        </div>
    );
};

export default Home;