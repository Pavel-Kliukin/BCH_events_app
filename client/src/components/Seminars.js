import React from 'react';
import style from './Seminars.module.css';
import Header from './Header';
import Footer from './Footer';
import SeminarCard from './SeminarCard';
import useFetch from '../hooks/useFetch';

const Seminars = () => {
    const { data, isLoading, error } = useFetch('http://localhost:3001/seminars');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={style.layout}>
            <Header />
            <div className={`${style.withMargin}`}>
                {data.map((seminarData) => (
                    <SeminarCard key={seminarData.id} data={seminarData} />
                ))}
            </div>
            <Footer />

        
        </div>
    );
};

export default Seminars;