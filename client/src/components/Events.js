import React from 'react';
import style from './Events.module.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import useFetch from '../hooks/useFetch';

const Events = () => {
   
    const { data, isLoading, error } = useFetch('http://localhost:3001/events');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={style.layout}>
            <Header />
            <div className={`${style.withMargin}`}>
            <div className='grid-container'>
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
