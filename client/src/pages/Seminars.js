import React from 'react';
import style from './Seminars.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SeminarCard from '../components/SeminarCard';
import useFetch from '../hooks/useFetch';

const Seminars = () => {
    const { data, isLoading, error } = useFetch('http://localhost:3001/seminars');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={style.layout}>
            <Header />
            <div className={style.seminarsBody}>
                <div className={style.heroBanner}>
                    <div className={style.hbLeftSide}>
                    </div>
                    <div className={style.hbRightSide}>
                        <div className={style.introText}>
                            <h2>Our upcoming seminars</h2>
                        </div>
                    </div>
                </div>
                <div className={style.eventsContainer}>
                    {data.map((seminarData) => (
                        <SeminarCard key={seminarData.id} data={seminarData} />
                    ))}
                </div>
            </div>
        <Footer />      
        </div>
    );
};

export default Seminars;