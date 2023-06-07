import React from 'react';
import style from './Events.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';

const Events = () => {
   
    const { data, isLoading, error } = useFetch('http://localhost:3001/events');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={style.layout}>
            <Header />
            <div className={style.eventsBody}>
                <div className={style.heroBanner}>
                    <div className={style.hbLeftSide}>
                    </div>
                    <div className={style.hbRightSide}>
                        <h2>We are happy to present you our events</h2>
                    </div>
                </div>
                <div className={style.eventsContainer}>
                    {data.map((eventData) => (
                        <Card key={eventData.id} data={eventData} />
                    ))}
                </div>
            </div>
            <Footer />      
        </div>
    );
};

export default Events;
