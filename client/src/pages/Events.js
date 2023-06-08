import React from 'react';
import style from './Events.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';

const Events = () => {
   

    const { data: events, isLoading: eventsLoading, error: eventsError } = useFetch('http://localhost:3001/events');
    const { data: seminars, isLoading: seminarsLoading, error: seminarsError } = useFetch('http://localhost:3001/seminars');

    if (eventsLoading || seminarsLoading) return <div>Loading...</div>;
    if (eventsError) return <div>Error: {eventsError}</div>;
    if (seminarsError) return <div>Error: {seminarsError}</div>;


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

                    {events.map((eventData) => (
                        <Card key={eventData.id} data={eventData} seminars={seminars} />
                    ))}
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default Events;
