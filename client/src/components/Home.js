import React from 'react';
import style from './Home.module.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const { data, isLoading, error } = useFetch('http://localhost:3001/events');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={style.layout}>
            <Header />
            <div className="grid-container">
                {data.map((eventData) => (
                    <Card key={eventData.id} data={eventData} />
                ))}
            </div>
            <Footer />

        
        </div>
    );
};

export default Home;
